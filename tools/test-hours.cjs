const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
// Load the actual function without running DOM setup. No npm dependencies.
const context = vm.createContext({ Intl, Date, document: { addEventListener() {} } });
vm.runInContext(readFileSync(require('node:path').join(__dirname, '../js/main.js'), 'utf8'), context);
const cases = [
    ['2026-11-02T12:00:00Z', false, 'martes'], // Monday closed
    ['2026-11-03T05:59:00Z', false, 'hoy'],
    ['2026-11-03T06:00:00Z', true, '16:00'],
    ['2026-11-03T14:59:00Z', true, '16:00'],
    ['2026-11-03T15:00:00Z', false, '18:00'],
    ['2026-11-03T17:00:00Z', true, '23:00'],
    ['2026-11-03T22:00:00Z', false, 'mañana'],
    ['2026-11-06T22:59:00Z', true, '00:00'],
    ['2026-11-06T23:00:00Z', false, 'hoy'], // midnight Saturday Madrid
    ['2026-11-07T22:59:00Z', true, '00:00'],
    ['2026-11-08T06:00:00Z', true, '16:00'],
    ['2026-11-08T15:00:00Z', false, 'martes'],
    ['2026-07-07T04:59:00Z', false, 'hoy'], // Summer UTC+2
    ['2026-07-07T05:00:00Z', true, '16:00'],
    ['2026-10-25T00:30:00Z', false, 'hoy'], // DST repeated hour
    ['2026-10-25T01:30:00Z', false, 'hoy'],
];
for (const [date, open, text] of cases) {
    const result = context.getRestaurantStatus(new Date(date));
    assert.equal(result.isOpen, open, date);
    assert.ok(result.details.includes(text), `${date}: ${result.details}`);
}
console.log(`Opening hours: ${cases.length} boundary / timezone cases passed`);
