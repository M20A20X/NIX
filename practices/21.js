const switcheroo = (string) => {
    if (typeof string === 'string') {
        return string.split('').map(char => char === 'a' ? 'b' : char === 'b' ? 'a' : char).join('');
    }
    return 'Incorrect values!';
};

console.log(
    switcheroo('abc'), switcheroo('aaabcccbaaa'), switcheroo('ccccc'), switcheroo('acb'), switcheroo('aabacbaa')
); // Output: bac bbbacccabbb ccccc bca bbabcabb