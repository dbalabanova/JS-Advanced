let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};



console.log(mathEnforcer.addFive(5))
const expect = require('chai').expect;

describe('mathEnforcer', function () {
    //let expexted = mathEnforcer.addFive()
    describe('addFive', function () {
        it('if input is number ("t")=> undefined', function () {
            let expected = mathEnforcer.addFive('t');
            expect(expected).to.equal(undefined);
        });
        it('if input is number ()=> undefined', function () {
            let expected = mathEnforcer.addFive();
            expect(expected).to.equal(undefined);
        });
        it('if input is number ([1])=> undefined', function () {
            let expected = mathEnforcer.addFive([1]);
            expect(expected).to.equal(undefined);
        });
        it('if input is number ({a:1})=> undefined', function () {
            let expected = mathEnforcer.addFive({ a: 1 });
            expect(expected).to.equal(undefined);
        });
        it('if input is number (1)=> 6', function () {
            let expected = mathEnforcer.addFive(1);
            expect(expected).to.equal(6);
        });
        it('if input is number (1.01)=> 6.01', function () {
            let expected = mathEnforcer.addFive(1.01);
            expect(expected).to.equal(6.01);
        });
        it('if input is number (-1)=> 4', function () {
            let expected = mathEnforcer.addFive(-1);
            expect(expected).to.equal(4);
        });

    });
    
    describe(' subtractTen ', function () {
        it('if input is a number("t")=>undefined', function () {
            let expected = mathEnforcer.subtractTen('t');
            expect(expected).to.equal(undefined);
        });
        it('if input is a number()=>undefined', function () {
            let expected = mathEnforcer.subtractTen();
            expect(expected).to.equal(undefined);
        });
        it('if input is number ([1])=> undefined', function () {
            let expected = mathEnforcer.subtractTen([1]);
            expect(expected).to.equal(undefined);
        });
        it('if input is number ({a:1})=> undefined', function () {
            let expected = mathEnforcer.subtractTen({ a: 1 });
            expect(expected).to.equal(undefined);
        });
        it('if input is number (-1)=> -9', function () {
            let expected = mathEnforcer.subtractTen(-1);
            expect(expected).to.equal(-11);
        });
        it('if input is number (1.1)=> -8.9', function () {
            let expected = mathEnforcer.subtractTen(1.1);
            expect(expected).to.closeTo(-8.9,0.01);
        });
        it('if input is number (11)=> 1', function () {
            let expected = mathEnforcer.subtractTen(11);
            expect(expected).to.equal(1);
        });
    });
    describe('sum', function(){
        it('if the first input is a number ("1",1)=>undefined',function(){
            let expected=mathEnforcer.sum('1',1);
            expect(expected).to.equal(undefined)
        });
        it('if the second input is a number (1,"1")=>undefined',function(){
            let expected=mathEnforcer.sum(1,'1');
            expect(expected).to.equal(undefined)
        });
        it('if the second input is a number ("1",1)=>undefined',function(){
            let expected=mathEnforcer.sum('1',1);
            expect(expected).to.equal(undefined)
        });
        // it('if the both inputs are numbers ("1","1")=>undefined',function(){
        //     let expected=mathEnforcer.sum('1','1');
        //     expect(expected).to.equal(undefined)
        // });
        it('if the both inputs are numbers (1,1)=>2',function(){
            let expected=mathEnforcer.sum(1,1);
            expect(expected).to.equal(2)
        });
        it('if it works with negative nmbers (-1,1)=>0',function(){
            let expected=mathEnforcer.sum(-1,1);
            expect(expected).to.equal(0)
        });
        it('if it works with negative nmbers (-1,-1)=>-2',function(){
            let expected=mathEnforcer.sum(-1,-1);
            expect(expected).to.equal(-2)
        });
        it('if it works with floating nmbers (-1.1,-1)=>-2.01',function(){
            let expected=mathEnforcer.sum(-1.01,-1);
            expect(expected).to.closeTo(-2.01,0.01)
        });
        it('if both inputs are numbers ([-1.1],-1)=>undefined',function(){
            let expected=mathEnforcer.sum([-1.1],-1);
            expect(expected).to.equal(undefined)
        });
        it('if both inputs are numbers ("d","d")=>undefined',function(){
            let expected=mathEnforcer.sum('d','d');
            expect(expected).to.equal(undefined)
        });
        it('if both inputs are numbers ({a:1},-1)=>undefined',function(){
            let expected=mathEnforcer.sum({a:1},-1);
            expect(expected).to.equal(undefined)
        });
        it('if both inputs are numbers ()=>undefined',function(){
            let expected=mathEnforcer.sum();
            expect(expected).to.equal(undefined)
        });
        it('if both inputs are numbers (1)=>undefined',function(){
            let expected=mathEnforcer.sum(1);
            expect(expected).to.equal(undefined)
        });
    })
})