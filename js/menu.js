const menuData = [
    // TAPAS CALIENTES
    { name: "Albóndigas", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Albóndigas de carne en salsa casera elaborada a fuego lento." },
    { name: "Alcachofas", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Corazones de alcachofa salteados con taquitos de jamón ibérico." },
    { name: "Calamar a la plancha", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Calamar fresco a la plancha con un toque de ajo y perejil." },
    { name: "Calamar a la romana", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Anillas de calamar tiernas con rebozado crujiente clásico." },
    { name: "Caracoles", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Caracoles tradicionales guisados en una salsa picante secreta de la casa." },
    { name: "Carrillada", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Carrillada de cerdo ibérico tierna y jugosa guisada con vino tinto." },
    { name: "Carne picada", category: "tapas", subcategory: "calientes", price: 2.00, desc: "Carne picada de vacuno y cerdo perfectamente sazonada al estilo Sumaq." },
    { name: "Costillas en salsa de barbacoa", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Costillitas de cerdo melosas glaseadas con salsa barbacoa." },
    { name: "Croquetas", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Croquetas caseras ración (Sabores: Jamón o Pollo)." },
    { name: "Gambas al ajillo", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Gambas jugosas salteadas con aceite de oliva virgen extra, ajo y guindilla." },
    { name: "Magro en salsa de tomate", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Tacos de magro de cerdo guisados en una rica salsa de tomate casera." },
    { name: "Nachos", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Nachos crujientes con queso fundido, carne marinada y crema agria." },
    { name: "Oreja adobada", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Oreja de cerdo adobada a la plancha, crujiente por fuera y tierna por dentro." },
    { name: "Patatas bravas", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Patatas cortadas a mano con nuestra salsa brava picante y alioli casero." },
    { name: "Patatas con chistorra", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Patatas fritas caseras con chistorra navarra salteada y huevo frito." },
    { name: "Pulpo gallego (1/2 ración)", category: "tapas", subcategory: "calientes", price: 5.00, desc: "Media ración de pulpo tierno sobre cama de patatas con aceite de oliva y pimentón." },
    { name: "Quesadilla de carne", category: "tapas", subcategory: "calientes", price: 2.50, desc: "Tortilla de trigo rellena de carne desmechada sazonada y queso fundido." },
    { name: "Quesadilla de gamba", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Tortilla de trigo con gambas al ajillo picadas y abundante queso fundido." },
    { name: "Queso frito", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Dados de queso frito crujiente servidos con mermelada de frambuesa." },
    { name: "Rabo y morro", category: "tapas", subcategory: "calientes", price: 2.50, desc: "Trozos de morro y rabo de cerdo fritos al estilo tradicional, súper crujientes." },
    { name: "Sepia", category: "tapas", subcategory: "calientes", price: 15.00, desc: "Sepia fresca a la plancha tierna y dorada con alioli." },
    { name: "Tequeños", category: "tapas", subcategory: "calientes", price: 2.50, desc: "Deditos de masa crujiente rellenos de queso blanco derretido (5 unidades)." },
    { name: "Tiras de pollo", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Solomillos de pollo marinados y empanados con panko súper crujientes." },
    { name: "Torrezno de Soria", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Torrezno auténtico con corteza crujiente y magro jugoso." },
    { name: "Habas con jamón", category: "tapas", subcategory: "calientes", price: 2.50, desc: "Habitas tiernas salteadas con cebolla y jamón serrano." },
    { name: "Boquerones fritos", category: "tapas", subcategory: "calientes", price: 3.00, desc: "Boquerones frescos enharinados y fritos al estilo andaluz." },

    // TAPAS FRÍAS
    { name: "Agritos", category: "tapas", subcategory: "frias", price: 2.00, desc: "Boquerones en vinagre con ajo, perejil y aceite de oliva virgen extra." },
    { name: "Ensalada mediterránea", category: "tapas", subcategory: "frias", price: 4.00, desc: "Lechuga, tomate, cebolla, atún, aceitunas negras y huevo cocido." },
    { name: "Ensaladilla rusa", category: "tapas", subcategory: "frias", price: 2.50, desc: "Patata cocida, atún, zanahoria, guisantes, huevo y mayonesa casera." },
    { name: "Jamón serrano", category: "tapas", subcategory: "frias", price: 2.00, desc: "Jamón serrano curado cortado fino, perfecto para acompañar." },
    { name: "Marinera", category: "tapas", subcategory: "frias", price: 2.80, desc: "Rosquilla crujiente con ensaladilla rusa y una anchoa encima." },
    { name: "Marinero", category: "tapas", subcategory: "frias", price: 2.80, desc: "Rosquilla crujiente con ensaladilla rusa y un boquerón en vinagre encima." },
    { name: "Olivas", category: "tapas", subcategory: "frias", price: 1.00, desc: "Aceitunas de la zona aliñadas al estilo de la casa." },
    { name: "Pan con ajo y tomate", category: "tapas", subcategory: "frias", price: 2.00, desc: "Pan tostado crujiente frotado con ajo y tomate rallado con aceite." },
    { name: "Patatas con agritos", category: "tapas", subcategory: "frias", price: 3.50, desc: "Patatas fritas de bolsa con boquerones en vinagre, una combinación clásica de bar." },
    { name: "Patatas en bolsa", category: "tapas", subcategory: "frias", price: 1.00, desc: "Bolsa de patatas fritas clásica para acompañar." },
    { name: "Queso manchego", category: "tapas", subcategory: "frias", price: 2.00, desc: "Queso manchego curado con nueces y un hilo de miel." },
    { name: "Salpicón de pulpo", category: "tapas", subcategory: "frias", price: 3.00, desc: "Pulpo picado con pimiento rojo, verde y cebolla en vinagreta." },
    { name: "Tomate con salazones (1/2 ración)", category: "tapas", subcategory: "frias", price: 5.00, desc: "Media ración de tomate trinchado con atún, anchoas y capellán." },
    { name: "Tomate trinchado", category: "tapas", subcategory: "frias", price: 4.00, desc: "Tomate de huerta trinchado con ajito picado, sal y aceite de oliva virgen." },
    { name: "Jamón y queso", category: "tapas", subcategory: "frias", price: 3.00, desc: "Tapa mixta de jamón serrano y queso semicurado." },
    { name: "Escalivada (1/2 ración)", category: "tapas", subcategory: "frias", price: 5.00, desc: "Pimiento, berenjena y cebolla asados al horno con migas de atún." },

    // BOCADILLOS DE LA CASA
    { name: "Ermita", category: "bocadillos", subcategory: "casa", price: 6.00, desc: "Solomillo de cerdo, rúcula, queso parmesano rallado, jamón serrano, reducción de salsa módena y mostaza miel." },
    { name: "San Vicent", category: "bocadillos", subcategory: "casa", price: 6.00, desc: "Lomo fresco a la plancha, sobrasada untada, queso fundido, bacon crujiente y huevo de codorniz frito." },
    { name: "San Miguel", category: "bocadillos", subcategory: "casa", price: 6.00, desc: "Tortilla de patata jugosa de la casa, mayonesa, lechuga fresca, rodajas de tomate y bacon." },
    { name: "San Pascual", category: "bocadillos", subcategory: "casa", price: 6.00, desc: "Filetes de ternera a la plancha, queso parmesano, rúcula fresca, mostaza antigua y salsa módena." },
    { name: "Santa Lucia", category: "bocadillos", subcategory: "casa", price: 6.00, desc: "Pechuga de pollo a la plancha, queso fundido, bacon, pipas tostadas crujientes y mermelada de tomate." },

    // BOCADILLOS CLÁSICOS
    { name: "Serranito", category: "bocadillos", subcategory: "clasicos", price: 6.00, desc: "Lomo a la plancha, pimiento verde frito y jamón serrano curado." },
    { name: "Pepito", category: "bocadillos", subcategory: "clasicos", price: 6.00, desc: "Ternera tierna a la plancha con un toque de mantequilla fina." },
    { name: "Pepito especial", category: "bocadillos", subcategory: "clasicos", price: 7.00, desc: "Ternera tierna a la plancha, pimiento verde frito y queso fundido." },
    { name: "Tortilongui", category: "bocadillos", subcategory: "clasicos", price: 6.00, desc: "Tortilla francesa jugosa de dos huevos con longaniza blanca local." },
    { name: "Blanco y negro", category: "bocadillos", subcategory: "clasicos", price: 5.00, desc: "Clásico bocadillo valenciano con longaniza blanca y morcilla de cebolla." },
    { name: "Vegetal", category: "bocadillos", subcategory: "clasicos", price: 6.00, desc: "Lechuga, tomate en rodajas, atún desmigado, mayonesa, maíz tierno y huevo cocido." },
    { name: "Juanjo", category: "bocadillos", subcategory: "clasicos", price: 6.00, desc: "Lechuga fresca, pechuga de pollo a la plancha, bacon crujiente y mayonesa." },
    { name: "XXL", category: "bocadillos", subcategory: "clasicos", price: 7.00, desc: "Pechuga de pollo, bacon, mayonesa, lechuga, huevo frito y lonchas de queso fundido." },
    { name: "Pechuga", category: "bocadillos", subcategory: "clasicos", price: 5.00, desc: "Pechuga de pollo tierna a la plancha (añade queso o bacon por +0.50€)." },
    { name: "Lomo", category: "bocadillos", subcategory: "clasicos", price: 5.00, desc: "Lomo de cerdo fresco a la plancha (añade queso o bacon por +0.50€)." },
    { name: "Chorizo", category: "bocadillos", subcategory: "clasicos", price: 5.00, desc: "Chorizo frito en bocadillo rústico caliente." },
    { name: "Jamón serrano", category: "bocadillos", subcategory: "clasicos", price: 4.50, desc: "Jamón serrano cortado con un chorrito de aceite de oliva virgen extra." },
    { name: "Bacon con queso", category: "bocadillos", subcategory: "clasicos", price: 5.00, desc: "Bacon crujiente a la plancha con queso Edam fundido." },

    // TOSTADAS & MEDIAS TOSTADAS
    { name: "Almorávide", category: "bocadillos", subcategory: "tostadas", price: 4.00, desc: "Pan tostado con tomate rallado, atún de calidad y lascas de mojama." },
    { name: "Salmón con queso", category: "bocadillos", subcategory: "tostadas", price: 3.80, desc: "Salmón ahumado sobre crema de queso untable en pan rústico tostado." },
    { name: "Queso Fresco", category: "bocadillos", subcategory: "tostadas", price: 2.00, desc: "Queso fresco de Burgos con rodajas de tomate y orégano." },
    { name: "Jamón Serrano", category: "bocadillos", subcategory: "tostadas", price: 3.00, desc: "Tostada clásica con tomate restregado, jamón serrano y aceite." },
    { name: "Jamón York", category: "bocadillos", subcategory: "tostadas", price: 2.00, desc: "Media tostada de jamón york con tomate o aceite." },
    { name: "Aceite", category: "bocadillos", subcategory: "tostadas", price: 1.20, desc: "Pan tostado con tomate natural rallado y aceite de oliva virgen." },
    { name: "Atún", category: "bocadillos", subcategory: "tostadas", price: 2.00, desc: "Pan tostado con tomate rallado y atún en conserva." },
    { name: "Queso Manchego", category: "bocadillos", subcategory: "tostadas", price: 2.50, desc: "Queso manchego curado en tostada caliente." },
    { name: "Mantequilla y mermelada", category: "bocadillos", subcategory: "tostadas", price: 1.40, desc: "Mantequilla tradicional con mermelada de fresa o melocotón." },
    { name: "Caballa", category: "bocadillos", subcategory: "tostadas", price: 2.50, desc: "Filetes de caballa con tomate rallado sobre pan tostado." },
    { name: "Catalana", category: "bocadillos", subcategory: "tostadas", price: 3.50, desc: "Tostada con jamón serrano frotado con ajo y tomate." },

    // CAFETERÍA E INFUSIONES
    { name: "Café Solo", category: "cafeteria", subcategory: "cafes", price: 1.10, desc: "Expresso clásico corto, aromático y con cuerpo." },
    { name: "Café con Leche", category: "cafeteria", subcategory: "cafes", price: 1.40, desc: "Café expresso combinado con leche cremosa al gusto." },
    { name: "Cortado", category: "cafeteria", subcategory: "cafes", price: 1.30, desc: "Café expresso cortado con una nube de leche caliente." },
    { name: "Belmonte", category: "cafeteria", subcategory: "cafes", price: 1.60, desc: "Café expresso con leche condensada y un chorrito de coñac (clásico alicantino)." },
    { name: "Colacao / Nesquik", category: "cafeteria", subcategory: "cafes", price: 1.30, desc: "Cacao en polvo disuelto en leche caliente." },
    { name: "Cappuccino", category: "cafeteria", subcategory: "cafes", price: 1.80, desc: "Café expresso con espuma de leche sedosa y cacao espolvoreado." },
    { name: "Carajillo Quemado", category: "cafeteria", subcategory: "cafes", price: 2.00, desc: "Carajillo tradicional con ron o coñac quemado con limón, canela y granos de café." },
    { name: "Café Americano", category: "cafeteria", subcategory: "cafes", price: 1.30, desc: "Expresso largo rebajado con agua caliente." },
    { name: "Bombón", category: "cafeteria", subcategory: "cafes", price: 1.40, desc: "Café expresso servido sobre una generosa capa de leche condensada dulce." },
    { name: "Carajillo sin Quemar", category: "cafeteria", subcategory: "cafes", price: 1.60, desc: "Café expresso con el licor directo (coñac, ron, whisky o anis)." },
    { name: "Infusiones Variadas", category: "cafeteria", subcategory: "infusiones", price: 1.30, desc: "Manzanilla, Poleo Menta, Té Verde, Té Rojo, Tila o Té Negro." },

    // POSTRES
    { name: "Torrija con helado de turrón", category: "cafeteria", subcategory: "postres", price: 5.50, desc: "Nuestra torrija caramelizada casera acompañada de una bola de helado de turrón de Jijona artesano." },
    { name: "Tarta de Queso casera", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Tarta de queso al horno cremosa con mermelada de arándanos." },
    { name: "Coulant de Chocolate", category: "cafeteria", subcategory: "postres", price: 4.50, desc: "Bizcocho de chocolate caliente con corazón de chocolate fundido y helado de vainilla." },
    { name: "Helado de Turrón", category: "cafeteria", subcategory: "postres", price: 2.50, desc: "Copa de helado con sabor a turrón artesano de la comarca." },
    { name: "Tarta de Whisky", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Porción de tarta helada con una infusión suave de whisky." },
    { name: "Contesa de Chocolate", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Clásico postre helado con capas crujientes de chocolate y nata." },
    { name: "Flan de Huevo casero", category: "cafeteria", subcategory: "postres", price: 3.00, desc: "Flan casero tradicional de huevo servido con nata montada." },
    { name: "Fresas con Nata", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Fresas frescas picadas servidas con abundante nata montada (de temporada)." },
    { name: "Rosegó artesano", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Postre dulce típico local crujiente ideal para acompañar el café." },
    { name: "Copa de Fruta preparada", category: "cafeteria", subcategory: "postres", price: 3.00, desc: "Frutas de temporada cortadas al momento y marinadas en zumo de naranja." },
    { name: "Naranja preparada", category: "cafeteria", subcategory: "postres", price: 3.50, desc: "Zumo de naranja natural preparado con un toque especial." },
    { name: "Bola de Helado", category: "cafeteria", subcategory: "postres", price: 2.00, desc: "Una bola de helado artesano a elegir (Turrón, Vainilla o Chocolate)." },
    { name: "Helado de Vainilla", category: "cafeteria", subcategory: "postres", price: 2.50, desc: "Copa de helado de vainilla clásica con sirope de chocolate." },

    // VINOS TINTO
    { name: "Ramón Bilbao (Crianza)", category: "vinos", subcategory: "tinto", price: 2.80, bottlePrice: 18.00, desc: "D.O.Ca. Rioja. Tempranillo. Notas a fruta negra y regaliz con toques de vainilla." },
    { name: "Semelé (Crianza)", category: "vinos", subcategory: "tinto", price: 2.80, bottlePrice: 18.00, desc: "D.O. Ribera del Duero. Tinta del país y Merlot. Fresco, carnoso y con taninos amables." },
    { name: "Viña Buena", category: "vinos", subcategory: "tinto", price: 2.50, bottlePrice: 15.00, desc: "D.O. Ribera del Duero. Roble. Frutal, persistente y con madera equilibrada." },
    { name: "Briego", category: "vinos", subcategory: "tinto", price: 2.50, bottlePrice: 14.00, desc: "D.O. Ribera del Duero. Joven Roble. Elegante, con aromas de frutos del bosque." },
    { name: "Vivanco (Crianza)", category: "vinos", subcategory: "tinto", price: 2.50, bottlePrice: 14.00, desc: "D.O.Ca. Rioja. Tempranillo. Aromas a cereza madura con notas ahumadas." },
    { name: "Abadía Roble", category: "vinos", subcategory: "tinto", price: 1.50, bottlePrice: 7.00, desc: "D.O. La Mancha. Vino joven suave, equilibrado y muy fácil de beber." },
    { name: "Solar de Castilla", category: "vinos", subcategory: "tinto", price: 1.50, bottlePrice: 7.00, desc: "Vino de la Tierra de Castilla. Joven, afrutado y fresco en boca." },
    { name: "De la Casa (Prada a Tope)", category: "vinos", subcategory: "tinto", price: 2.00, bottlePrice: 8.00, desc: "Mencía del Bierzo. Un vino de autor fresco, con marcada personalidad frutal." },
    { name: "Familia Valdelana", category: "vinos", subcategory: "tinto", price: 2.50, bottlePrice: 15.00, desc: "D.O.Ca. Rioja. Expresivo, con recuerdos a frutos rojos y cacao." },

    // VINOS BLANCO
    { name: "Luna Blanca (Semidulce)", category: "vinos", subcategory: "blanco", price: 2.50, bottlePrice: 15.00, desc: "D.O. Rueda. Verdejo. Semidulce y muy aromático, con notas florales y frutales." },
    { name: "Monasterio de Palazuelos", category: "vinos", subcategory: "blanco", price: 2.30, bottlePrice: 13.00, desc: "D.O. Rueda. Verdejo Joven. Seco, equilibrado y con el característico amargor final." },
    { name: "Ojo Plato", category: "vinos", subcategory: "blanco", price: 2.30, bottlePrice: 13.00, desc: "D.O. Rueda. Verdejo. Joven, fresco y con una acidez muy agradable." },
    { name: "Abadía Roble", category: "vinos", subcategory: "blanco", price: 1.50, bottlePrice: 7.00, desc: "D.O. La Mancha. Verdejo Joven. Fresco, ligero y equilibrado." },
    { name: "Marqués de Vizhoja", category: "vinos", subcategory: "blanco", price: 2.80, bottlePrice: 15.00, desc: "Vino de Autor de Galicia. Seco y afrutado, elaborado con uvas selectas." }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('menu-search');
    const clearSearchBtn = document.getElementById('clear-search');

    if (!menuGrid || !searchInput || !clearSearchBtn) return;
    const categories = new Set(Array.from(tabButtons, button => button.dataset.category));
    const categoryFromUrl = () => {
        const category = new URLSearchParams(window.location.search).get('cat');
        if (category === 'postres') return 'cafeteria'; // Preserve old shared links.
        return categories.has(category) ? category : 'tapas';
    };
    let currentCategory = categoryFromUrl();
    const syncButtons = () => tabButtons.forEach(button => {
        const selected = button.dataset.category === currentCategory;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
    });
    // Local data only today; escape before templating if a future source changes.
    const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    const renderMenu = (category, searchQuery = '') => {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';

        let filtered = menuData.filter(item => item.category === category);

        if (searchQuery.trim() !== '') {
            const query = normalize(searchQuery);
            filtered = menuData.filter(item => {
                const matchesSearch = normalize(item.name).includes(query) ||
                                     normalize(item.desc).includes(query) ||
                                     (item.subcategory && normalize(item.subcategory).includes(query));
                return matchesSearch && item.category === category;
            });
        }

        const resultStatus = document.getElementById('menu-results');
        if (resultStatus) resultStatus.textContent = `${filtered.length} platos en ${document.querySelector('.tab-btn.active').textContent}.`;
        if (filtered.length === 0) {
            menuGrid.innerHTML = `
                <div class="no-results">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-color); margin-bottom: 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <h3>No se encontraron platos</h3>
                    <p>Prueba con otros términos de búsqueda o cambia de categoría.</p>
                </div>
            `;
            return;
        }

        // Group by subcategory to display elegant headers within the category
        const subcategories = [...new Set(filtered.map(item => item.subcategory))];

        // Define clean titles for subcategories
        const subcatTitles = {
            calientes: "Tapas Calientes",
            frias: "Tapas Frías",
            casa: "Bocadillos Especiales de la Casa",
            clasicos: "Bocadillos Clásicos",
            tostadas: "Tostadas y Medias Tostadas",
            cafes: "Cafés e Infusiones",
            infusiones: "Tés e Infusiones",
            postres: "Postres Caseros",
            tinto: "Vinos Tintos",
            blanco: "Vinos Blancos"
        };

        subcategories.forEach(subcat => {
            const subcatItems = filtered.filter(item => item.subcategory === subcat);
            if (subcatItems.length === 0) return;

            // Create Subcategory Section
            const section = document.createElement('div');
            section.className = 'menu-subcat-section';

            const title = document.createElement('h3');
            title.className = 'menu-subcat-title';
            title.textContent = subcatTitles[subcat] || subcat.toUpperCase();
            section.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'menu-items-grid';

            subcatItems.forEach(item => {
                const card = document.createElement('div');
                card.className = 'menu-card';

                // Format price: check if it has a bottle price
                let priceHtml = `<span class="menu-price">${item.price.toFixed(2)}€</span>`;
                if (item.bottlePrice) {
                    priceHtml = `
                        <div class="menu-price-group">
                            <span>Copa: <strong>${item.price.toFixed(2)}€</strong></span>
                            <span>Botella: <strong>${item.bottlePrice.toFixed(2)}€</strong></span>
                        </div>
                    `;
                }

                // Check if it's a house specialty bocadillo to give a special gold accent
                const isHouseSpecialty = item.category === 'bocadillos' && item.subcategory === 'casa';
                if (isHouseSpecialty) {
                    card.classList.add('specialty-card');
                }

                card.innerHTML = `
                    <div class="menu-card-header">
                        <h4 class="menu-item-name">
                            ${escapeHtml(item.name)}
                            ${isHouseSpecialty ? '<span class="specialty-badge">★ Especialidad</span>' : ''}
                        </h4>
                        ${priceHtml}
                    </div>
                    <p class="menu-item-desc">${escapeHtml(item.desc)}</p>
                `;
                grid.appendChild(card);
            });

            section.appendChild(grid);
            menuGrid.appendChild(section);
        });
    };

    // Event listener for Tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.category;
            syncButtons();
            renderMenu(currentCategory, searchInput.value);

            // Update URL without reloading page
            const newUrl = new URL(window.location.href);
            if (window.location.protocol !== 'file:' && newUrl.searchParams.get('cat') !== currentCategory) {
                newUrl.searchParams.set('cat', currentCategory);
                window.history.pushState(null, '', newUrl);
            }
        });
    });

    // Event listener for Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.length > 0) {
                clearSearchBtn.classList.add('visible');
            } else {
                clearSearchBtn.classList.remove('visible');
            }
            renderMenu(currentCategory, val);
        });
    }

    // Event listener to Clear Search
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.classList.remove('visible');
            renderMenu(currentCategory, '');
            searchInput.focus();
        });
    }

    window.addEventListener('popstate', () => {
        currentCategory = categoryFromUrl();
        syncButtons();
        renderMenu(currentCategory, searchInput.value);
    });
    syncButtons();
    renderMenu(currentCategory);
});
