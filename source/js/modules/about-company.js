const aboutCompanyButton = document.querySelector('.about-company__button');
const dopContent = document.querySelectorAll('.about-company__dop-content');

aboutCompanyButton.classList.remove('is-without-js');
dopContent.forEach((content) => content.classList.remove('is-without-js'));

function readMoreInfoCompany(dopContents, buttonForMoreContent) {
  dopContents.forEach((content) => content.classList.add('is-hidden'));

  buttonForMoreContent.addEventListener('click', function () {
    dopContents.forEach((content) => content.classList.toggle('is-hidden'));
    if (dopContent[0].classList.contains('is-hidden')) {
      buttonForMoreContent.textContent = 'Подробнее';
    } else {
      buttonForMoreContent.textContent = 'Свернуть';
    }
  });
}

export {readMoreInfoCompany, aboutCompanyButton, dopContent};
