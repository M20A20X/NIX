const firstNum = parseInt(prompt('Введите 1-е число:'), 10);
const secondNum = parseInt(prompt('Введите 2-е число:'), 10);

if (firstNum > secondNum) {
    alert(firstNum + secondNum);
} else if (firstNum < secondNum) {
    alert(firstNum * secondNum);
} else {
    alert('Числа одинаковые');
}