function solve(array) {
    let sum = 0;
    let inverse = 0;
for (let i = 0; i < array.length; i++) {
    let current = array[i];
    sum+=Number(current);
    inverse += 1/current
}
console.log(sum);
console.log(`${inverse}`)
console.log(array.join(''));
}
solve([1, 2, 3])