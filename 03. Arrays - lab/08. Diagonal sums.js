function diagonal(array) {
    let firstDiag=0;
    let secondDiag=0;
for (let i = 0; i < array.length; i++) {
    firstDiag+=array[i][i];
    secondDiag+=array[i][array.length-1-i];
}
console.log(`${firstDiag} ${secondDiag}`);

}
diagonal([[20, 40],
    [10, 60]]
   )