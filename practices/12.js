const between = (firstNumber, secondNumber) => {
    if (!isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber < secondNumber) {
        return [...Array(secondNumber - firstNumber + 1)].map((_, index) => firstNumber + index);
    }
    return 'Incorrect values!';
}

console.log(
    between(1, 4), between(-2, 2), between(20, 25)
); // Output: [1, 2, 3, 4]   [-2, -1, 0, 1, 2]   [20, 21, 22, 23, 24, 25]