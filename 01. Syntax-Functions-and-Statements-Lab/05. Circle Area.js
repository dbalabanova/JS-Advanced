function solve(a) {
    let result;
if(typeof(a)==='number'){
    result = (Math.PI*a**2).toFixed(2);

} else {
    type = typeof(a);
    result = `We can not calculate the circle area, because we receive a ${type}.`;
    
}
console.log(result);

}
solve(5)