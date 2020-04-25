function solve (a,b,c) {
    let arr = [a,b,c]
    let max = Math.max(...arr);
    //console.log(`The largest number is ${max}.`);
    return `The largest number is ${max}.`;
    
}
console.log(solve(5,-3,89));