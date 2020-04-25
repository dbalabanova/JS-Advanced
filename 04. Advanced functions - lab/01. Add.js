function solution(a) {
    let result = 0;

    return function addNumber(b) {
        return result =a+b;
        // addNumber.toString = function(){
        //     return result
        // }
        // return addNumber
    }
}
let add5=solution(5);
console.log(add5(3));
