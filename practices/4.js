const names = ['Саша', 'Петя', 'Оксана'];
const search = 'Петя';


console.log([...names].reverse().map((name) => name === search ? search : name), names); // Output: ['Оксана', 'Петя', 'Саша'] ['Саша', 'Петя', 'Оксана']

names.reverse().forEach((name) => {
    if (name === search) {
        name = search;
    }
});
console.log(names); // Output: ['Оксана', 'Петя', 'Саша']