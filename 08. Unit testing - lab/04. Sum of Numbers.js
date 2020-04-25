const expect = require("chai").expect;

function sum(arr) {
    let sum = 0;
    
    for (num of arr)
        sum += Number(num);
    return sum;
}
console.log(['t'])
describe ('is this cumator of numbers works', function(){
    //is sum function
    //ir array = array
    //is numbers inside the array
    // negative numbers
    it('is sum a function', function (){
        let expected = typeof sum;
        expect(expected).to.equal('function')
    });
    // it('is the input an array', function (){
    //     let expected=(sum(1,1));
    //     expect(expected).to.equal('Type error')
    // });
    it('sum [1,1]=>2', function (){
        let expected=(sum([1,1]));
        expect(expected).to.equal(2)
    });
    it('sum [-1,-1]=>-2', function (){
        let expected=(sum([-1,-1]));
        expect(expected).to.equal(-2)
    });
    it('sum [1,-1]=>0', function (){
        let expected=(sum([1,-1]));
        expect(expected).to.equal(0)
    });
    it('sum ["t"]=>0', function (){
        let expected=(sum(['t']));
        expect(expected).to.be.NaN
    });
})