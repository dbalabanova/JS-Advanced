function solve(array) {
    let number = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'chop') {
            number = number / 2;
            console.log(number);
        } else if (command === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (command === 'spice') {
            number++;
            console.log(number);
        } else if (command==='bake') {
            number = number*3;
            console.log(number)
        } else if (command === 'fillet') {
            number = 0.8*number;
            console.log(number);
        }
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);