const spacey = (wordsArray) => {
    if (Array.isArray(wordsArray) && wordsArray.every(elem => typeof elem === 'string')) {
        return wordsArray.map((_, index) => wordsArray.slice(0, index + 1).reduce((newWord, word) => newWord.concat(word), ''));
    }
    return 'Incorrect value!';
};


console.log(
    spacey(['kevin', 'has', 'no', 'space']), spacey(['this', 'cheese', 'has', 'no', 'holes'])
); // Output: ['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']   ['this', 'thischeese', 'thischeesehas', 'thischeesehasno', 'thischeesehasnoholes']