document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loads already scrolled

    // 2. Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Dynamic operating hours calculator
    const openStatusEl = document.getElementById('open-status');
    const statusTextEl = document.getElementById('status-details');

    if (openStatusEl) {
        const checkRestaurantStatus = () => {
            const now = new Date();
            const day = now.getDay(); // 0: Sunday, 1: Monday, 2: Tuesday, etc.
            const hour = now.getHours();
            const min = now.getMinutes();
            const currentTime = hour * 60 + min; // current time in minutes from midnight

            let isOpen = false;
            let closingTimeText = '';
            let nextOpeningText = '';

            // Kitchen / Opening schedules (in minutes from midnight)
            const schedules = {
                // Tuesday to Thursday: 07:00 – 16:00 and 18:00 – 23:00
                weekday: [
                    { open: 7 * 60, close: 16 * 60, closeText: '16:00' },
                    { open: 18 * 60, close: 23 * 60, closeText: '23:00' }
                ],
                // Friday & Saturday: 07:00 – 24:00 (continuous)
                weekend: [
                    { open: 7 * 60, close: 24 * 60, closeText: 'medianoche (00:00)' }
                ],
                // Sunday: 07:00 – 16:00
                sunday: [
                    { open: 7 * 60, close: 16 * 60, closeText: '16:00' }
                ]
            };

            if (day === 1) { // Monday (Cerrado)
                isOpen = false;
                nextOpeningText = 'Abrimos mañana martes a las 07:00';
            } else if (day >= 2 && day <= 4) { // Tuesday - Thursday
                for (const slot of schedules.weekday) {
                    if (currentTime >= slot.open && currentTime < slot.close) {
                        isOpen = true;
                        closingTimeText = slot.closeText;
                        break;
                    }
                }
                if (!isOpen) {
                    if (currentTime < 7 * 60) {
                        nextOpeningText = 'Abrimos hoy a las 07:00';
                    } else if (currentTime >= 16 * 60 && currentTime < 18 * 60) {
                        nextOpeningText = 'Abrimos de nuevo hoy a las 18:00';
                    } else {
                        nextOpeningText = 'Abrimos mañana a las 07:00';
                    }
                }
            } else if (day === 5 || day === 6) { // Friday & Saturday
                for (const slot of schedules.weekend) {
                    if (currentTime >= slot.open && currentTime < slot.close) {
                        isOpen = true;
                        closingTimeText = slot.closeText;
                        break;
                    }
                }
                if (!isOpen) {
                    if (currentTime < 7 * 60) {
                        nextOpeningText = 'Abrimos hoy a las 07:00';
                    } else {
                        nextOpeningText = 'Abrimos mañana a las 07:00';
                    }
                }
            } else if (day === 0) { // Sunday
                for (const slot of schedules.sunday) {
                    if (currentTime >= slot.open && currentTime < slot.close) {
                        isOpen = true;
                        closingTimeText = slot.closeText;
                        break;
                    }
                }
                if (!isOpen) {
                    if (currentTime < 7 * 60) {
                        nextOpeningText = 'Abrimos hoy a las 07:00';
                    } else {
                        nextOpeningText = 'Abrimos el martes a las 07:00 (lunes cerrado)';
                    }
                }
            }

            // Update DOM
            if (isOpen) {
                openStatusEl.className = 'status-badge status-open';
                openStatusEl.textContent = 'Abierto Ahora';
                if (statusTextEl) {
                    statusTextEl.innerHTML = `Estamos abiertos. Cierra a las <strong>${closingTimeText}</strong>.`;
                }
            } else {
                openStatusEl.className = 'status-badge status-closed';
                openStatusEl.textContent = 'Cerrado';
                if (statusTextEl) {
                    statusTextEl.innerHTML = `Estamos cerrados. <span>${nextOpeningText}</span>.`;
                }
            }
        };

        checkRestaurantStatus();
        // Update status every 1 minute
        setInterval(checkRestaurantStatus, 60000);
    }
});
