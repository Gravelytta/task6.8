const currentUrl = document.querySelector('#currentUrl');
addEventListener('click', (event) => {
const newUrl = prompt('Измените текст ссылки');
currentUrl.textContent = newUrl;
event.preventDefault()
}) 