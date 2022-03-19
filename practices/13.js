const hexToDec = (hex) => {
    if (typeof hex === 'string' && /[-\da-f]*/.test(hex)) {
        const BASE = 16;

        const charToDec = (char) => 'a' <= char && char <= 'f' ? char.charCodeAt() - 'a'.charCodeAt() + 10 : parseInt(char);

        const isNegative = hex.charAt(0) === '-';
        const moduleHexString = isNegative ? hex.slice(1) : hex;
        const moduleDec = moduleHexString.toLowerCase().split('').reverse().reduce((summ, char, index) => summ + charToDec(char) * Math.pow(BASE, index), 0)
        return moduleDec * (isNegative ? -1 : 1);
    }
    return 'Incorrect value!';
}

console.log(
    hexToDec('1'), hexToDec('a'), hexToDec('10'), hexToDec('FF'), hexToDec('-C')
); // Output: 1 10 16 255 -12