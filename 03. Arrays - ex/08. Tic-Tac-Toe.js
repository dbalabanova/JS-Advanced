function main(array) {

    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    let firstPlayer = 0;
    let secondPlayer = 0;
    let sumfirstDiag = 0
    let secondDiag = 0;
    let result = array.reduce((acc, curr, index, arr) => {
        debugger;
        acc = curr.split(' ').map(Number);
        if (index % 2 === 0) {
            if (dashboard[acc[0]][acc[1]]!=='O') {
                dashboard[acc[0]][acc[1]] = 'X'
            } else {
                console.log('This place is already taken. Please choose another!')
                index--
            }
        } else {
            if (dashboard[acc[0]][acc[1]] !== 'X') {
                dashboard[acc[0]][acc[1]] = "O"
            } else {
                index--;
                console.log('This place is already taken. Please choose another!')

            }
        }
        
        return dashboard
    }, [...dashboard]);
    return result.join('\t')
    // for (let i = 0; i < array.length; i++) {
    // console.log(array[i].split(' '))   
    // }
}
console.log(main(["0 1",
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
))