const evensAndOdds = (number) => {
    if (!isNaN(number)) {
        if (Number.isInteger(number / 2)) {
            const BASE = 2;
            let binaryDigitsArray = [];
            do {
                binaryDigitsArray.push((number % BASE).toString());
                number = Math.floor(number / BASE);
            } while (number >= BASE - 1);
            return binaryDigitsArray.reverse().join('');
        } else {
            const BASE = 16;
            let hexDigitsArray = [];
            do {
                const rest = number % BASE;
                hexDigitsArray.push(10 <= rest && rest <= 15 ? String.fromCharCode(rest - 10 + 'a'.charCodeAt()) : rest.toString());
                number = Math.floor(number / BASE);
            } while (number >= BASE - 1);
            return hexDigitsArray.reverse().join('');
        }
    }
    return 'Incorrect values!';
}

console.log(
    evensAndOdds(2), evensAndOdds(13)
); // Output: 10 d