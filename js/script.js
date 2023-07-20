let config;

async function loadConfig() {
    try {
        let url;
        if (window.location.pathname.includes('console')) {
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

    menuButton.addEventListener('click', function () {
        mainHeader.style.display = 'none';
        menuHeader.style.display = 'flex';
    });

    menuBackButton.addEventListener('click', function () {
        menuHeader.style.display = 'none';
        mainHeader.style.display = 'flex';
    });

    const brandVersion = document.getElementById('brand-version');
    if (config && config.version) {
        brandVersion.textContent = `v${config.version}`;
    }
}
