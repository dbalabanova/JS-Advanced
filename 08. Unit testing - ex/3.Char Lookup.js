const expect=require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', function(){
    it('if string is type string (12,2)=>undefined',function(){
        let expected = lookupChar(12,2);
        expect(expected).to.equal(undefined)
    });
    it('if index is type number ("deni""2")=>undefined',function(){
        let expected = lookupChar('deni','2');
        expect(expected).to.equal(undefined)
    });
    it('if index is correct number ("deni",65)=>Incorrect index',function(){
        let expected = lookupChar('deni',65);
        expect(expected).to.equal("Incorrect index")
    });
    it('if index is correct number ("",0)=>undefined',function(){
        let expected = lookupChar('',0);
        expect(expected).to.equal("Incorrect index")
    });
    it('if index is correct number ("adeni",0)=>a',function(){
        let expected = lookupChar('adeni',0);
        expect(expected).to.equal("a")
    });
    it('if index is correct number ("adeni",1.2)=>undefined',function(){
        let expected = lookupChar('adeni',1.2);
        expect(expected).to.equal(undefined)
    });
    it('if index is correct number ("adeni",-1)=>Incorrect index',function(){
        let expected = lookupChar('adeni',-1);
        expect(expected).to.equal("Incorrect index")
    });
    it('if index is correct number ("adeNi",3)=>Incorrect index',function(){
        let expected = lookupChar('adeNi',3);
        expect(expected).to.equal("N")
    });
})