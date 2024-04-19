const userLanguage = navigator.language || navigator.userLanguage;
const lang = userLanguage.startsWith('de') ? 'de' : 'en';

fetch(`content_${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.header__description').textContent = data.header_description;

    })
    .catch(error => console.error("Error loading content JSON:", error));
    