const modal = document.querySelector('[data-modal="feedback-form"]');
const openModalBtn = document.querySelector('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-close-modal]');

const showModalFeedback = () => {
  const closeModal = () => {
    modal.classList.add('is-closed');
  };

  closeModalBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-closed')) {
      closeModal();
    }
  });

  const openModal = () => {
    modal.classList.remove('is-closed');
  };

  openModalBtn.addEventListener('click', openModal);
};

export {showModalFeedback};
