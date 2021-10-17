export function openTicketModal() {
    const modalBackground = document.querySelector('.modal-background');
    modalBackground.classList.add('openModal');
    document.querySelector('.modal-block').classList.add('openModalBlock');
    modalBackground.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-background')) {
            closeTicketModal();
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTicketModal();
        }
    });
}
export function closeTicketModal() {
    document.querySelector('.modal-background').classList.remove('openModal');
    document.querySelector('.modal-block').classList.remove('openModalBlock');
}