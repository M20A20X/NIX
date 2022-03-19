const divisibleByThree = (string) => {
    if (typeof string === 'string' && /\d*/.test(string)) {
        return Number.isInteger(string.split('').reduce((summ, charDigit) => summ + parseInt(charDigit), 0) / 3);
    }
    return 'Incorrect value!';
};

console.log(
    divisibleByThree('123'), divisibleByThree('19254'), divisibleByThree('88'), divisibleByThree('1')
); // Output: true true false false