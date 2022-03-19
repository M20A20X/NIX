const remove = (string, amount) => {
    if (typeof string === 'string' && !isNaN(amount)) {
        return string.split('').filter(char => {
            if (amount && char === '!') {
                amount--;
                return false;
            }
            return true;
        }).join('');
    }
    return 'Incorrect values!';
}

console.log(
    remove("Hi!", 1), remove("Hi!", 100), remove("Hi!!!", 1), remove("Hi!!!", 100), remove("!Hi", 1),
    remove("!Hi!", 1), remove("!Hi!", 100), remove("!!!Hi !!hi!!! !hi", 1), remove("!!!Hi !!hi!!! !hi", 3),
    remove("!!!Hi !!hi!!! !hi", 5), remove("!!!Hi !!hi!!! !hi", 100)
);
// Output:
// Hi
// Hi
// Hi!!
// Hi
// Hi
// Hi!
// Hi
// !!Hi !!hi!!! !hi
// Hi !!hi!!! !hi
// Hi hi!!! !hi
// Hi hi hi