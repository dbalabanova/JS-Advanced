const expect = require("chai").expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
 
describe('if rgb will return hexcolor we need the three parameters to be valid', 
function() {
    it('if rgbToHexColor is a function', function(){
        let expected = typeof rgbToHexColor;
        expect(expected).to.equal('function')
    });
    it('if red is valid RGB number -1 => undefined', function(){
        let expected = rgbToHexColor(-1,1,1);
        expect(expected).to.equal(undefined)
    });
    it('if red is integer 1.1 => undefined', function(){
        let expected = rgbToHexColor(1.1,1,1);
        expect(expected).to.equal(undefined)
    });
    it('if red is valid RGM integer 256=>undefined', function(){
        let expected =  rgbToHexColor(256,1,1);
        expect(expected).to.equal(undefined)
    });
    it('if green is valid RGB number -1 => undefined', function(){
        let expected = rgbToHexColor(1,-1,1);
        expect(expected).to.equal(undefined)
    });
    it('if green is integer 1.1 => undefined', function(){
        let expected = rgbToHexColor(1,1.1,1);
        expect(expected).to.equal(undefined)
    });
    it('if green is valid RGM integer 256=>undefined', function(){
        let expected =  rgbToHexColor(1,256,1);
        expect(expected).to.equal(undefined)
    });
    it('if blue is valid RGB number -1 => undefined', function(){
        let expected = rgbToHexColor(1,1,-1);
        expect(expected).to.equal(undefined)
    });
    it('if blue is integer 1.1 => undefined', function(){
        let expected = rgbToHexColor(1,1,1.1);
        expect(expected).to.equal(undefined)
    });
    it('if blue is valid RGM integer 256=>undefined', function(){
        let expected =  rgbToHexColor(1,1,256);
        expect(expected).to.equal(undefined)
    });
    it('if red is correc hexcolor 0,0,0=>#000000', function(){
        let expected =  rgbToHexColor(0,0,0);
        expect(expected).to.equal('#000000')
    });
    it( '(255,255,255)=>#FFFFFF', function(){
        let expected =  rgbToHexColor(255,255,255);
        expect(expected).to.equal('#FFFFFF')
    });
})
