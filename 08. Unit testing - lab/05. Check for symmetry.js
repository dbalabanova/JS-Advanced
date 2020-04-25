const expect = require("chai").expect;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
console.log(isSymmetric(['1','1']));

describe('isSymetric', function() {
    it('is isSymtric a function', function (){
        let expected = typeof isSymmetric;
        expect(expected).to.equal('function');
    });
    it('is the input an array(1)=>false', function (){
        let expected=isSymmetric(1);
        expect(expected).to.equal(false)
    });
    it('is the input an array (1,1)=>false', function (){
        let expected=isSymmetric(1,1);
        expect(expected).to.equal(false)
    });
    it('is the input an array([1])=>true', function (){
        let expected=isSymmetric([1]);
        expect(expected).to.equal(true)
    });
    it('is the input an symetric array [1,2]=> false', function (){
        let expected=isSymmetric([1,2]);
        expect(expected).to.equal(false)
    });
    it('is the input an array(1,2,1)', function (){
        let expected=isSymmetric([1,2,1]);
        expect(expected).to.equal(true)
    });
    it('is the input an array([i])', function (){
        let expected=isSymmetric(['i']);
        expect(expected).to.equal(true)
    });
    it('is the input an array([i,t])', function (){
        let expected=isSymmetric(['i','t']);
        expect(expected).to.equal(false)
    });
    it('is the input an array([i,t,i])', function (){
        let expected=isSymmetric(['i','t','i']);
        expect(expected).to.equal(true)
    });
    it('is the input an array([i,7])', function (){
        let expected=isSymmetric(['i',7]);
        expect(expected).to.equal(false)
    });
    it('is the input an array("t")', function (){
        let expected=isSymmetric("t");
        expect(expected).to.equal(false)
    });
    it('is the input an array({})', function (){
        let expected=isSymmetric({});
        expect(expected).to.equal(false)
    });
    it('is the input an array(true)', function (){
        let expected=isSymmetric(true);
        expect(expected).to.equal(false)
    });
    it('is the input an array[]', function (){
        let expected=isSymmetric([]);
        expect(expected).to.equal(true)
    });
    it('is the input an array[-1,2,1]', function (){
        let expected=isSymmetric([-1,2,1]);
        expect(expected).to.equal(false)
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.equal(true);
    });
})