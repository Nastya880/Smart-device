const introButton = document.querySelector('.intro__button');
const sectionFeedback = document.querySelector('.feedback');

function smoothScroll(buttonForScroll, sectionResult) {
  buttonForScroll.addEventListener('click', function (e) {
    e.preventDefault();

    sectionResult.scrollIntoView({
      behavior: 'smooth',
    });
  });
}

export {smoothScroll, introButton, sectionFeedback};
