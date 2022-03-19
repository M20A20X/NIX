const findMultDiff = (firstArray, secondArray) => {
    const checkArray = (array) => Array.isArray(array) && array.every(element => !isNaN(element));

    if (checkArray(firstArray) && checkArray(secondArray)) {
        const findMultiplication = (numbersArray) => numbersArray.reduce((multiplication, number) => multiplication * number, 1);
        return findMultiplication(firstArray) - findMultiplication(secondArray);
    }
    return 'Incorrect value!';
}

console.log(
        findMultDiff([3, 2, 5], [1, 4, 4]), findMultDiff([9, 7, 2], [5, 2, 2]), findMultDiff([11, 2, 5], [1, 10, 8]),
        findMultDiff([4, 4, 7], [3, 9, 3]), findMultDiff([15, 20, 25], [10, 30, 25])
    ) // Output: 14 106 30 31 0