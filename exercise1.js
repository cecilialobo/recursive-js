const sumValues = (number) => {
    if (number <= 1) {
        return number; 
    }
    return number + sumValues(number - 1);
}

console.log(sumValues(5));
console.log(sumValues(10));
console.log(sumValues(3));