const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', handleBackdropClick);
window.addEventListener('keydown', handleKeyDown);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function handleBackdropClick(event) {
  if (event.target === refs.backdrop) {
    toggleModal();
  }
}

function handleKeyDown(event) {
  if (event.code === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
    toggleModal();
  }
}
