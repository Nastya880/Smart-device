const btnOpenModal = document.querySelector('[data-modal="open-modal"]');
const inputForFocus = document.querySelector('[data-name]');

const addFocus = (btnOpenModalWindow, input) => {
  btnOpenModalWindow.addEventListener('click', function () {
    setTimeout(function () {
      input.focus();
    }, 100);
  });
};

export {addFocus, btnOpenModal, inputForFocus};
