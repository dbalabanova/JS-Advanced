function solve (min,max) {
    let n = Number(min);
    let x = Number(max);
    let result = 0;
    for (let i = n; i <=x; i++) {
        result +=i;
        
    }
    return result
    //console.log(result);
    
}
console.log(solve('1','5'));