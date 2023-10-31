import {initPhoneInput} from './form-validate/init-phone-input.js';

function addPhoneMask() {
  const inputNumbersPhone = document.querySelectorAll('[data-number-phone]');

  inputNumbersPhone.forEach((inputNumberPhone) => {
    initPhoneInput(inputNumberPhone);
  });
}

export {addPhoneMask};
