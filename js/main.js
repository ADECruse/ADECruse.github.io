const userLanguage = navigator.language || navigator.userLanguage;
const lang = userLanguage.startsWith('de') ? 'de' : 'en';

fetch(`content_${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.header__description').textContent = data.header_content;
        document.querySelector('#thesera .card__description').textContent = data.thesera_content;
        document.querySelector('#drwendel .card__description').textContent = data.drwendel_content;

    })
    .catch(error => console.error("Error loading content JSON:", error));


const copyright = document.querySelector('.footer__copyright');
let getCurrentTime = new Date();
let getCurrentYear = getCurrentTime.getUTCFullYear();
copyright.textContent = `\u00A9 ${getCurrentYear} Alan D. E. Cruse`;