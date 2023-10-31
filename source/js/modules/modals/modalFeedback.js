const modal = document.querySelector('[data-modal="feedback-form"]');
const overlay = document.querySelector('[data-modal="overlay"]');
const openModalBtn = document.querySelector('[data-modal="open-modal"]');
const closeModalBtn = document.querySelector('[data-modal="close-modal"]');

function showModalFeedback() {
  // close modal function
  const closeModal = function () {
    modal.classList.add('is-closed');
    overlay.classList.add('is-closed');
  };

  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // close modal when the Esc key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-closed')) {
      closeModal();
    }
  });

  // open modal function
  const openModal = function () {
    modal.classList.remove('is-closed');
    overlay.classList.remove('is-closed');
  };
  // open modal event
  openModalBtn.addEventListener('click', openModal);
}

export {showModalFeedback};
