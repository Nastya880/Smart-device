const modal = document.querySelector('[data-modal="feedback-form"]');
const overlay = document.querySelector('[data-modal="overlay"]');
const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');

const showModalFeedback = () => {
  const closeModal = function () {
    modal.classList.add('is-closed');
    overlay.classList.add('is-closed');
  };

  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-closed')) {
      closeModal();
    }
  });

  const openModal = function () {
    modal.classList.remove('is-closed');
    overlay.classList.remove('is-closed');
  };

  openModalBtn.addEventListener('click', openModal);
};

export {showModalFeedback};
