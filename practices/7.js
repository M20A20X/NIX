const weigth = 5;
let recommendation = '';

if (weigth < 4) {
    recommendation = 'Пора перекусить';
} else if (5.5 < weigth) {
    recommendation = 'Пора на тренировку';
} else {
    recommendation = 'Вес в норме';
}

console.log(recommendation);