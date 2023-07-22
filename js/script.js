let config;
let subsites = ["console", "settings"];

function contains(tekst, tablica) {
    for (let i = 0; i < tablica.length; i++) {
        if (tekst.includes(tablica[i])) {
            return true;
        }
    }
    return false;
}

async function loadConfig() {
    try {
        let url;
        if (contains(window.location.pathname, subsites)) {
            url = '../config.json';
        } else {
            url = './config.json';
        }
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Nie udało się pobrać pliku JSON.');
        }

        const jsonArray = await response.json();

        console.log(jsonArray);
        config = jsonArray;

        initializeApp();
    } catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}

loadConfig();

function initializeApp() {
    const menuButton = document.getElementsByClassName('menu-button')[0];
    const menuBackButton = document.getElementsByClassName('menu-back-button')[0];

    const mainHeader = document.getElementsByClassName('main-header')[0];
    const menuHeader = document.getElementsByClassName('menu-header')[0];

    menuButton.addEventListener('click', () => {
        mainHeader.style.animation = 'close-menu 0.3s 1';
        mainHeader.style.pointerEvents = 'none';
        setTimeout(() => {
            mainHeader.style.display = 'none';
        }, 300);

        menuHeader.style.animation = 'open-menu 0.3s 1';
        menuHeader.style.pointerEvents = 'auto';
        setTimeout(() => {
            menuHeader.style.display = 'flex';
        }, 300);
    });

    menuBackButton.addEventListener('click', () => {
        menuHeader.style.animation = 'close-menu 0.3s 1';
        menuHeader.style.pointerEvents = 'none';
        setTimeout(() => {
            menuHeader.style.display = 'none';
        }, 300);

        mainHeader.style.animation = 'open-menu 0.3s 1';
        mainHeader.style.pointerEvents = 'auto';
        setTimeout(() => {
            mainHeader.style.display = 'flex';
        }, 300);
    });

    const brandVersion = document.getElementById('brand-version');
    if (config && config.version) {
        brandVersion.textContent = `v${config.version}`;
    }
}
