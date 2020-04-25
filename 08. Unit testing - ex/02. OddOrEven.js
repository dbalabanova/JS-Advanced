const expect=require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}



describe(' isOddOrEven', function(){
    it('is the input of type string ([1,1])=> undefined',function(){
        let expected = isOddOrEven([1,1]);
        expect(expected).to.equal(undefined)
    });
    it('is the input of type string (1)=> undefined',function(){
        let expected = isOddOrEven(1);
        expect(expected).to.equal(undefined)
    });
    it('is the input of type string ({a:1})=> undefined',function(){
        let expected = isOddOrEven({a:1});
        expect(expected).to.equal(undefined)
    });
    it('is the input of type string (date)=> undefined',function(){
        let expected = isOddOrEven(new Date());
        expect(expected).to.equal(undefined)
    });
    it('if input is type string even length ("deni")=> undefined',function(){
        let expected = isOddOrEven('deni');
        expect(expected).to.equal('even')
    });
    it('if input is type string even length ("deni")=> undefined',function(){
        let expected = isOddOrEven('den');
        expect(expected).to.equal('odd')
    })
})