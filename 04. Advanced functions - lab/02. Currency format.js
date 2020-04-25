function result(currencyFormatter) {
    let dollarFormatter= value=> currencyFormatter(",", "$", true, value);
    return dollarFormatter
   
}
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
 let dollarFormatter=result(currencyFormatter);
 console.log(dollarFormatter(5342));
 