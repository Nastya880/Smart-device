const accordionButton = document.querySelectorAll('[data-accordion-button]');
const accordionElement = document.querySelectorAll('[data-accordion-container]');

const showAccordion = (buttons, elements) => {
  if (elements) {
    elements.forEach((element) => {
      element.classList.remove('is-opened');
      element.classList.add('is-closed');
    });
  }

  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const parent = button.parentNode;

        if (parent.classList.contains('is-closed')) {
          elements.forEach((child) => {
            child.classList.remove('is-opened');
            child.classList.add('is-closed');
          });

          parent.classList.remove('is-closed');
          parent.classList.add('is-opened');
        } else {
          parent.classList.remove('is-opened');
          parent.classList.add('is-closed');
        }
      });
    });
  }
};

export {showAccordion, accordionButton, accordionElement};

