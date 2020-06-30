const languageButton = document.querySelector('#language');

const copyright = document.querySelector('#copyright');
let getCurrentTime = new Date();
console.log(getCurrentTime);
let getCurrentYear = getCurrentTime.getUTCFullYear();
copyright.textContent = `\u00A9 ${getCurrentYear}, Alan D. E. Cruse`;