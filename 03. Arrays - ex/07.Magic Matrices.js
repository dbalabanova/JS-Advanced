function magic(array) {
    let result = true;
    let sum = array[0].reduce((a, b) => a + b)
    let sumCol = 0;
    let sumRow = 0;
    for (let i = 0; i < array.length; i++) {
        sumRow = array[i].reduce((a, b) => a + b);
        for (let j = 0; j < array.length; j++) {
            sumCol += array[j][i];
        }
        if (sumRow !== sumCol || sumCol!==sum || sumRow!== sum) {
            result = false;
            break;
        }
        sumCol = 0;
        sumRow = 0;
    }
    console.log(result);

}
magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)