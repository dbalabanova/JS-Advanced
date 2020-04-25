class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

const expect = require('chai').expect;
const assert = require('chai').assert;

describe('class payment package', function () {
    it('name is a string => string', function () {
        let expected = new PaymentPackage('name', 1);
        expect(typeof expected.name).to.equal('string')
    });
    it('name is an empty string("",5)=>error', function () {
        expect(() => new PaymentPackage('', 1).name).to.Throw('Name must be a non-empty string')
    });
    it('name is not a string (3,56)=>error', function () {
        expect(() => new PaymentPackage(6, 1).name).to.Throw('Name must be a non-empty string')
    });
    it('value is a number ("name",1)=> number', function () {
        let expected = new PaymentPackage('name', 1);
        expect(typeof expected.value).to.equal('number')
    });
    it('value is a number ("name",1)=> number', function () {
        let expected = new PaymentPackage('name', 1);
        expected.value =0
        expect(expected.value).to.equal(0)
    });
    it('value is not a number("name","1") => error', function () {
        expect(() => new PaymentPackage('name', '1')).to.Throw('Value must be a non-negative number')
    });
    it('value is a negative number("name",-1) => error', function () {
        expect(() => new PaymentPackage('name', -1)).to.Throw('Value must be a non-negative number')
    });

    it('VAT is a number ("name",1)=> number', function () {
        let expected = new PaymentPackage('name', 1).VAT;
        expect(expected).to.equal(20)
    });
    it('VAT is not a number("a") => error', function () {
        expect(() => new PaymentPackage('name', 1).VAT = 'a').to.Throw('VAT must be a non-negative number')
    });
    it('VAT is a negative number(-1) => error', function () {
        expect(() => new PaymentPackage('name', 1).VAT = -1).to.Throw('VAT must be a non-negative number')
    });
    it('active is not a boolean ("yes") => error', function () {
        expect(() => new PaymentPackage('name', 1).active = 'yes').to.Throw('Active status must be a boolean')
    });
    it('active is a boolean (true) => error', function () {
        let expected = new PaymentPackage('name', 1).active;
        expect(expected).to.equal(true)
        //  expect(()=>new PaymentPackage('name',1).active=true).to.Throw('Active status must be a boolean')
    });
    it('toString with everything ok', function () {
        let expected = new PaymentPackage('name', 1);

        expect(expected.toString()).to.equal('Package: name\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    });
    it('toString with inactive status', function () {
        let expected = new PaymentPackage('name', 1);
        expected.active=false

        expect(expected.toString()).to.equal('Package: name (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
    });
    // it("Value get/set test", function() {
    //     let actual = new PaymentPackage("Ivan", 1);
    //     actual.value = 0;
    //     assert.equal(actual.value, 0);
    // });
})