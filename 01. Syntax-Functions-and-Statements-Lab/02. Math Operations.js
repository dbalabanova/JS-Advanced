function solved(x,y, operator) {
    let result;
    switch(operator) {
        case '+': result =x+y; break;
        case '-' : result = x-y; break;
        case '/' : result = x/y; break;
        case '*' : result = x*y; break;
        case '%' : result = x%y; break;
        case '**' : result = x**y; break;
    }
    return result
    //console.log(result);
    
}
console.log(solved(5,2,'**'));