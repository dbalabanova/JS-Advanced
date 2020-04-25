class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId
    };
    set clientId(value) {
       // let pattern = /[0-9]{6}/g
        if (value.length!==6) {
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._cliendId = value
    }
    get email() {
        return this._email
    };
    set email(value) {
        let pattern = /[a-zA-Z\d]+@[a-z]+/g
        if (!value.match(pattern)) {
            throw new TypeError('Invalid e-mail')
        }
        this._email = value
    }
    get firstName() {
        return this._firstName
    };
    set firstName(value) {
        let patterLatin = /^[a-zA-Z]{3,20}$/g
        if ((value.length < 3 || value.length > 20)) {
            throw new TypeError(`First name must be between 3 and 20 characters long`)
        }
        if (!value.match(patterLatin)) {
            throw new TypeError(`First name must contain only Latin characters`)
        }
        this._firstName = value
    }
    get lastName() {
        return this._lastName
    };
    set lastName(value) {
        let patterLatin = /^[a-zA-Z]{3,20}$/g
        if ((value.length < 3 || value.length > 20)) {
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }
        if (!value.match(patterLatin)) {
            throw new TypeError(`Last name must contain only Latin characters`)
        }
        this._lastName = value
    }
}
let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov')
