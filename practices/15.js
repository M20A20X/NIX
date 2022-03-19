const maxDiff = (numbers) => {
    if (Array.isArray(numbers) && numbers.every(element => !isNaN(element))) {
        const numbersAmount = numbers.length;
        if (numbersAmount === 0 || numbersAmount === 1) {
            return 0;
        } else {
            let
                minNumber = numbers[0],
                maxNumber = numbers[0];

            numbers.forEach(number => {
                if (number < minNumber) {
                    minNumber = number;
                } else if (number > maxNumber) {
                    maxNumber = number;
                }
            });
            return maxNumber - minNumber;
        }
    }
    return 'Incorrect values!';
}


console.log(
    maxDiff([0, 1, 2, 3, 4, 5, 6]), maxDiff([-0, 1, 2, -3, 4, 5, -6]),
    maxDiff([0, 1, 2, 3, 4, 5, 16]), maxDiff([16]), maxDiff([])
); // Output: 6 11 16 0 0