const findMultiplication = (numbersArray) => {
    if (Array.isArray(numbersArray) && numbersArray.every(element => !isNaN(element))) {
        return numbersArray.reduce((multiplication, number) => multiplication * number, 1);
    }
    return 'Incorrect value!';
}

console.log(findMultiplication([1, 2, 3, 4])); // Output: 24