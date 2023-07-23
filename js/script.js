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

// Notyfikacje dla Menu
tippy('#menu-settings', {
    content: 'Ustawienia',
    delay: [300, 10]
});
tippy('#menu-console', {
    content: 'Konsola',
    delay: [300, 10]
});