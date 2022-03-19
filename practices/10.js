const removeUnwantedNames = (namesArray) => {
    if (Array.isArray(namesArray) && namesArray.every(element => typeof element === 'string')) {
        const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
        return namesArray.filter((name) => !unwantedNames.includes(name));
    }
    return 'Incorrect value!';
}

console.log(removeUnwantedNames(['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга'])); // Output: ['Анастасия', 'Саныч']
console.log(removeUnwantedNames(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга', ])); // Output: ['Алексей', 'Семён', 'Василиса', 'Максим']
console.log(removeUnwantedNames(['Алишер', 'Ольга'])); // Output: ['Алишер']