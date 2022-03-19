const finalGrade = (examGrade, projAmount) => {
    if (0 <= examGrade && examGrade <= 100 && 0 <= projAmount) {
        if (examGrade > 90 || projAmount > 10) {
            return 100;
        } else if (examGrade > 75 && projAmount >= 5) {
            return 90;
        } else if (examGrade > 50 && projAmount >= 2) {
            return 75;
        } else {
            return 0;
        }
    }
    return 'Incorrect values';
}

console.log(
    finalGrade(100, 12), finalGrade(99, 0), finalGrade(10, 15), finalGrade(85, 5), finalGrade(55, 3), finalGrade(55, 0), finalGrade(20, 2)
); // Output: 100 100 100 90 75 0 0