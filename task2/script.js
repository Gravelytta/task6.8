const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода текста в веб-консоль');
    console.log('Вот так выглядит вывод информации в консоли');
});

const consoleLog1 = document.querySelector('#alert');

consoleLog1.addEventListener('click', () => {
    alert('Метод для вывода окна с сообщением');
});

const consoleLog2 = document.querySelector('#prompt');

consoleLog2.addEventListener('click', () => {
    prompt('Метод для вывода окна с возможностью ввода текста');
});
