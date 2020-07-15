const languageButton = document.querySelector('#language');

const headers = {portfolio: "My Portfolio"};

const copyright = document.querySelector('#copyright');
let getCurrentTime = new Date();
let getCurrentYear = getCurrentTime.getUTCFullYear();
copyright.textContent = `\u00A9 ${getCurrentYear}, Alan D. E. Cruse`;

