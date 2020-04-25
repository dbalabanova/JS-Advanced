function solve(array) {
let x1 = array[0];
let y1 = array[1];
let x2 = array[2];
let y2 = array[3];
let a = x1-x2;
let b = y1-y2;
let c1 = Math.sqrt(x1**2+y1**2);
let c2 = Math.sqrt(x2**2+y2**2);
let c3 = Math.sqrt(a**2+b**2);
if(Number.isInteger(c1)){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

}if(Number.isInteger(c2)){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

} if(Number.isInteger(c3)){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
} else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

}
}
solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);