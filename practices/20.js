const sortByKeys = (array) => {
    if (Array.isArray(array)) {
        const sorted = {};
        array.forEach(element => {
            const typeofElement = typeof element;
            if (!sorted.hasOwnProperty(typeofElement)) {
                sorted[typeofElement] = [element];
            } else {
                sorted[typeofElement].push(element);
            }
        });
        return JSON.stringify(sorted);
    }
    return 'Incorrect values!';
}

console.log(
    sortByKeys(['a', 1, 2, false, 'b'])
); // Output: {"string":["a","b"], "number":[1,2], "boolean":[false]}