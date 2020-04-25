const expect = require('chai').expect;
const assert = require('chai').assert;

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

// describe('StringBuilder', function () {
//     let expected;
//     beforeEach(function() {
//         expected = new StringBuilder();
//     })
//     it('if function attached to instance', function () {
//        // let expected =  new StringBuilder()
//        expect(expected).to.have.property('append');
//        expect(expected).to.have.property('prepend');
//        expect(expected).to.have.property('insertAt');
//        expect(expected).to.have.property('remove');
//        expect(expected).to.have.property('toString');
//    });
//     it('Can be instantiated with a passed in string argument or without anything', function () {
//        // let expected = new StringBuilder();
//         //expect(expected._stringArray).to.have.lengthOf(0);
//         expect(expected.toString()).to.equal('')
//     });
//     it('Can be instantiated with a passed in string argument or without anything', function () {
//         let expected = new StringBuilder('Deni');
//         //expect(expected._stringArray).to.have.lengthOf(4);
//         expect(new StringBuilder('Deni').toString()).to.equal('Deni');
//     });
//     it('append(string) - converts the passed in string argument to an array and adds it to the end of the storage', function () {
//         //let expected = new StringBuilder();
//         expected.append('Test')
//         //expect(expected._stringArray).to.have.lengthOf(8);
//         expect(expected.toString()).to.equal('Test');
//     });
//     it('if argument is not string', function () {
//         expect(() => new StringBuilder().append({'aA':'1'})).to.Throw('Argument must be string')
//     });
//     // it('append(string) - converts the passed in string argument to an array and adds it to the end of the storage', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.append('test')
//     //     expect(expected._stringArray[expected._stringArray.length - 1]).to.equal('t')
//     // });
//     // it('prepend - if it put it', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.prepend('test')
//     //     expect(expected._stringArray).to.have.lengthOf(8)
//     // });
//     // it('prepend - f it put it at the begining', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.prepend('test')
//     //     expect(expected._stringArray[0]).to.equal('t')
//     // });
//     // it('insertAt(string,index)', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.insertAt('test', 0)
//     //    // expect(expected._stringArray[0]).to.equal('t');
//     //     expect(expected.toString()).to.equal('testdeni');
//     // });
//     // it('insertAt(string,index)', function () {
        
//     //     expect(() => new StringBuilder('deni').insertAt(2, 2)).to.Throw('Argument must be string')
//     // });
//     // it('insertAt(string,index)', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.insertAt('test', 0)
//     //     //expect(expected._stringArray[0]).to.equal('t');
//     //     expect(expected.toString()).to.equal('testdeni');
//     // });
//     // it('remove(sartIndex,length)', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.remove(2, 2)
//     //     //expect(expected._stringArray[0]).to.equal('d');
//     //     expect(expected.toString()).to.equal('de');
//     // });
    
//     // it('tostring joint by " " ', function () {
//     //     let expected = new StringBuilder('deni');
//     //     expected.append('test')
//     //     expect(expected.toString()).to.equal('denitest');
//     // });
//     // it('if argument is not string', function () {
//     //     expect(() => new StringBuilder(56)).to.Throw('Argument must be string')
//     // });
    
//     it('if argument is not string', function () {
//         expect(() => new StringBuilder().prepend({"Za":'1'})).to.Throw('Argument must be string')
//     });
//     // it('if argument is not string', function () {
//     //     expect(() => new StringBuilder(3).insertAt(0,1)).to.Throw('Argument must be string')
//     // });
   
//    it('insertAt() with correct param', function() {
//     let stringBuilder =  new StringBuilder()
//     stringBuilder.append('Test');
//     stringBuilder.prepend('Demo');
//     stringBuilder.insertAt('Te', 0);
//     stringBuilder.remove(0, 2);
//     expect(stringBuilder.toString()).to.equal('DemoTest');
// })
// });


describe('StringBuilder', function() {
    let stringBuilder;
    beforeEach(function() {
        stringBuilder = new StringBuilder();
    })

    it('should have the correct function properties', function() {
        //let StringBuilder =  new StringBuilder()
        assert.isFunction(StringBuilder.prototype.append);
        assert.isFunction(StringBuilder.prototype.prepend);
        assert.isFunction(StringBuilder.prototype.insertAt);
        assert.isFunction(StringBuilder.prototype.remove);
        assert.isFunction(StringBuilder.prototype.toString);
    })
    it('Can be instantiated without anything', function() {
        //let expected =  new StringBuilder()
        expect(stringBuilder.toString()).to.equal('')        
        //assert.equal('', stringBuilder.toString());
    })
    it('Can be instantiated with correct parameters', function() {
        //let expected =  new StringBuilder('Test')
        expect(new StringBuilder('Test').toString()).to.equal('Test')
        //assert.equal(new StringBuilder('Test'), 'Test');
    })
    it('append() with correct parameters', function() {
       // let expected =  new StringBuilder()
       // expected.append('Test');
       stringBuilder.append('Test')
        expect(stringBuilder.toString()).to.equal('Test')
        //stringBuilder.append('Test');
        //assert.equal('Test', stringBuilder.toString());
    })
    it('append() throw error with incorrect param', function() {
        expect(()=>new StringBuilder().append({'Test': 'Demo'})).to.Throw('Argument must be string')
        // assert.throw(function() {
        //     stringBuilder.append({'Test': 'Demo'});
        // }, 'Argument must be string');
    })
    it('prepend() throw new error with incorrect param', function() {
        expect(()=>new StringBuilder().prepend({'Test': 'Demo'})).to.Throw('Argument must be string')

        // assert.throw(function() {
        //     stringBuilder.prepend({'Test': 'Demo'})
        // }, 'Argument must be string');
    })
    it('insertAt() with correct param', function() {
       // let stringBuilder=new StringBuilder()
        stringBuilder.append('Test');
        stringBuilder.prepend('Demo');
        stringBuilder.insertAt('Te', 0);
        stringBuilder.remove(0, 2);
        assert.equal(stringBuilder.toString(), 'DemoTest');
    })
})