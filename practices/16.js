const largestWords = (string, minLenght) => {
    if (typeof string === 'string' && !isNaN(minLenght)) {
        return string.split(/[\.\,\s]/).filter(word => word !== '' && word.length > minLenght);
    }
    return 'Incorrect values!';
}

console.log(
    largestWords('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5),
    largestWords('Над городом облака, коридоры, берега, проспект, река.', 7)
); // Output: ['Сегодня', 'отличный', 'самого', 'пойдем', 'купаться']   ['коридоры', 'проспект']