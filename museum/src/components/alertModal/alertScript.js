export const customAlert = (text) => {
    const alertBackground = document.querySelector('.custom-alert__background');
    const acceptButton = document.querySelector('.accept-button');
    const alertBlock = document.querySelector('.custom-alert__form');
    const alertTextBlock = alertBackground.querySelector('.custom-alert__form-text');
    alertTextBlock.innerHTML = text;
    alertBackground.classList.add('activeAlert');
    alertBlock.classList.add('activeAlertForm');
    acceptButton.addEventListener('click', () => {
        alertBackground.classList.remove('activeAlert');
        alertBlock.classList.remove('activeAlertForm');
    });
};
