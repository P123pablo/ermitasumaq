/** Shared navigation and usual opening status. Business hours mirror the footer. */
function getRestaurantStatus(now = new Date()) {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(now);
    const value = type => parts.find(part => part.type === type).value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(value('weekday'));
    const minutes = Number(value('hour')) * 60 + Number(value('minute'));
    const slots = day === 1 ? [] : day === 0 ? [[420, 960]] : day >= 5 ? [[420, 1440]] : [[420, 960], [1080, 1380]];
    const openSlot = slots.find(([start, end]) => minutes >= start && minutes < end);
    if (openSlot) {
        const close = openSlot[1] === 1440 ? 'medianoche (00:00)' : `${String(Math.floor(openSlot[1] / 60)).padStart(2, '0')}:00`;
        return { isOpen: true, details: `Estamos abiertos. Cierra a las ${close}.` };
    }
    let next;
    if (day === 1) next = 'Abrimos mañana martes a las 07:00';
    else if (minutes < 420) next = 'Abrimos hoy a las 07:00';
    else if (day >= 2 && day <= 4 && minutes < 1080) next = 'Abrimos de nuevo hoy a las 18:00';
    else if (day === 0) next = 'Abrimos el martes a las 07:00 (lunes cerrado)';
    else next = 'Abrimos mañana a las 07:00';
    return { isOpen: false, details: `Estamos cerrados. ${next}.` };
}

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
        const handleScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        const mobile = window.matchMedia('(max-width: 768px)');
        const setMenu = (open, restoreFocus = false) => {
            const expanded = mobile.matches && open;
            hamburger.classList.toggle('active', expanded);
            navMenu.classList.toggle('active', expanded);
            hamburger.setAttribute('aria-expanded', String(expanded));
            hamburger.setAttribute('aria-label', expanded ? 'Cerrar menú' : 'Abrir menú');
            navMenu.inert = mobile.matches && !expanded;
            if (restoreFocus) hamburger.focus();
        };
        hamburger.addEventListener('click', () => setMenu(hamburger.getAttribute('aria-expanded') !== 'true'));
        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') setMenu(false, true);
        });
        document.addEventListener('focusin', event => {
            if (!header.contains(event.target)) setMenu(false);
        });
        document.addEventListener('click', event => {
            if (!header.contains(event.target)) setMenu(false);
        });
        mobile.addEventListener('change', () => setMenu(false));
        setMenu(false);
    }

    const status = document.getElementById('open-status');
    const details = document.getElementById('status-details');
    if (status) {
        const updateStatus = () => {
            const result = getRestaurantStatus();
            status.className = `status-badge ${result.isOpen ? 'status-open' : 'status-closed'}`;
            status.textContent = result.isOpen ? 'Abierto ahora' : 'Cerrado';
            if (details && details.textContent !== result.details) details.textContent = result.details;
        };
        updateStatus();
        setInterval(updateStatus, 60000);
        document.addEventListener('visibilitychange', () => { if (!document.hidden) updateStatus(); });
    }
});
