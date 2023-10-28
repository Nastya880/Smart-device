const aboutCompanyButton = document.querySelector('.about-company__button');
const dopContent = document.querySelectorAll('.about-company__dop-content');

aboutCompanyButton.classList.remove('is-without-js');
dopContent[0].classList.remove('is-without-js');
dopContent[1].classList.remove('is-without-js');

function readMoreInfoCompany() {
  dopContent[0].classList.add('is-hidden');
  dopContent[1].classList.add('is-hidden');

  aboutCompanyButton.addEventListener('click', function () {
    dopContent[0].classList.toggle('is-hidden');
    dopContent[1].classList.toggle('is-hidden');
    if (!dopContent.classList.contains('is-hidden')) {
      aboutCompanyButton.textContent = 'Свернуть';
    } else {
      aboutCompanyButton.textContent = 'Подробнее';
    }
  });
}

export {readMoreInfoCompany};
