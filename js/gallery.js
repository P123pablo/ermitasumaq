/** Native modal preserves keyboard operation and isolates the page behind it. */
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('gallery-lightbox');
    const image = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.lightbox-close');
    const items = document.querySelectorAll('.gallery-item');
    const filters = document.querySelectorAll('.filter-btn');
    if (!lightbox || !image || !caption || !closeButton) return;
    let trigger;
    let previousOverflow;
    items.forEach(item => item.addEventListener('click', () => {
        trigger = item;
        image.src = item.dataset.image;
        image.alt = item.querySelector('img').alt;
        caption.textContent = item.dataset.caption;
        previousOverflow = document.body.style.overflow;
        lightbox.showModal();
        document.body.style.overflow = 'hidden';
        closeButton.focus();
    }));
    closeButton.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => {
        document.body.style.overflow = previousOverflow || '';
        image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        if (trigger && !trigger.hidden) trigger.focus();
    });
    filters.forEach(button => button.addEventListener('click', () => {
        filters.forEach(filter => {
            const selected = filter === button;
            filter.classList.toggle('active', selected);
            filter.setAttribute('aria-pressed', String(selected));
        });
        items.forEach(item => {
            item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
        });
    }));
});
