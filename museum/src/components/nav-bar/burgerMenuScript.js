export function activateBurgerMenu(target) {
    const buttonsBlock = document.querySelector('.navBar__buttonsBlock');
    const spans = target.querySelectorAll('span');
    spans.forEach((span, i) => {
        if (i === 0) {
            span.classList.toggle('frstLine-active');
        } else if (i === 1) {
            span.classList.toggle('secLine-active');
        } else {
            span.classList.toggle('thirdLine-active');
        }
    });
    // welcomeSectionHeader.classList.toggle('opacityHide');
    buttonsBlock.classList.toggle('activeBurger');
}