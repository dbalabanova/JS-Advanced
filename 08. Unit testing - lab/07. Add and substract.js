const expect = require("chai").expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let sth = createCalculator() 
console.log(sth.add([1,2]));
console.log(sth.get());
describe('calculator', function(){
    it('if createCalculator i sa funstion', function(){
        let expected= typeof createCalculator;
        expect(expected).to.equal('function')
    });
    it('add 1=> 1', function(){
        let expected= createCalculator();
        expect(expected.add(1)).to.equal(undefined);
        expect(expected.get()).to.equal(1);
    });
    it('subtract 1=> -1', function(){
        let expected= createCalculator();
        expect(expected.subtract(1)).to.equal(undefined);
        expect(expected.get()).to.equal(-1);
    });
    it('get => 0', function(){
        let expected= createCalculator();
        expect(expected.get()).to.equal(0);
    });
    it('add t => NaN', function(){
        let expected= createCalculator();
        expect(expected.add('t')).to.equal(undefined);
        expect(expected.get()).to.be.NaN;
    });
    it('add [1,2] => NaN', function(){
        let expected= createCalculator();
        expect(expected.add([1,2])).to.equal(undefined);
        expect(expected.get()).to.be.NaN;
    });
    it('subtract t => NaN', function(){
        let expected= createCalculator();
        expect(expected.subtract('t')).to.equal(undefined);
        expect(expected.get()).to.be.NaN;
    });
    it('subtract[1,2] => NaN', function(){
        let expected= createCalculator();
        expect(expected.subtract([1,2])).to.equal(undefined);
        expect(expected.get()).to.be.NaN;
    });
    it('add 1 subtract 1=> 0', function(){
        let expected= createCalculator();
        expect(expected.add(1)).to.equal(undefined);
        expect(expected.subtract(1)).to.equal(undefined);
        expect(expected.get()).to.equal(0);
    });
    it('add "1"=> 1', function(){
        let expected= createCalculator();
        expect(expected.add('1')).to.equal(undefined);
        expect(expected.get()).to.equal(1);
    });
    it('subtract "1"=> -1', function(){
        let expected= createCalculator();
        expect(expected.subtract('1')).to.equal(undefined);
        expect(expected.get()).to.equal(-1);
    });
})