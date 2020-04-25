const BookStore = require('../02/02. Book Store');
const expect= require('chai').expect;

describe('book store', function () {
    let store;
    beforeEach(() => {
        store = new BookStore('Store')
    })
    it('if constructor works properly name = store', function () {
        let actual = new BookStore('Store');
        expect(actual.name).to.equal('Store')
    });
    it('if constructor works properly books = []', function () {
        let actual = new BookStore('Store');
        expect(actual.books.length).to.equal(0)
    });
    it('if constructor works properly workers = []', function () {
        let actual = new BookStore('Store');
        expect(actual._workers.length).to.equal(0)
    });
    //describe('stockBooks', function(){
    it('receiving array =>["Inferno-Dan Braun", "Harry Potter-J.Rowling", "Uncle Toms Cabin-Hariet Stow", "The Jungle-Upton Sinclear"]);', function () {
        let actual = store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
        expect(typeof store.books).to.equal('object');
        expect((store.books[0])['title']).to.equal('Inferno');
        expect((store.books[0])['author']).to.equal('Dan Braun');
        //expect(actual).to.deep.equal([{ title: 'Inferno', author: 'Dan Braun' }]);
    })
    it('receiving array =>["Inferno-Dan Braun", "Harry Potter-J.Rowling", "Uncle Toms Cabin-Hariet Stow", "The Jungle-Upton Sinclear"]);', function () {
        let actual = store.stockBooks(['Inferno-Dan Braun']);
        // expect(typeof store.books).to.equal('object');
        // expect((store.books[0])['title']).to.equal('Inferno');
        // expect((store.books[0])['author']).to.equal('Dan Braun');
        expect(actual).to.deep.equal([{ title: 'Inferno', author: 'Dan Braun' }]);
    })

    //})
    //describe('hire', function(){
    it('receiving array =>("alberto","engineer")=>ok', function () {
        let actual = store.hire('George', 'seller');
        expect(actual).to.equal(`George started work at Store as seller`);
    });
    it('receiving teh sam earray twice =>("alberto","engineer")=>erroe', function () {
        //let actual = store.hire('alberto','engineer');
        store.hire('George', 'seller');
        expect(() => store.hire('George', 'seller')).to.Throw('This person is our employee');
    })
    //});
    //describe('fire', function(){
    it('receiving correct name => message', function () {
        store.hire('Tom', 'juniorSeller')
        let actual = store.fire('Tom');
        expect(actual).to.equal('Tom is fired')
    });
    it('receiving incorrect name => message', function () {
        store.hire('Tom', 'juniorSeller')
        //let actual= store.fire('alex');
        expect(() => store.fire('alex')).to.Throw(`alex doesn't work here`)
    })
    //})
    //describe('sellBook',function(){
    it('receiving correct title and worker (deni is cool, alberto)', function () {
         store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
        // store.hire('George', 'seller')
        store.hire('Ina', 'seller')
        // store.hire('Tom', 'juniorSeller')
        let actual= store.sellBook('Inferno', 'Ina');
        // store.stockBooks(['Harry Potter-J.Rowling']);
        // store.fire('Tom')
        // console.log(store.printWorkers());


        //store.hire('alberto', 'engineer');
        //let actual = store.sellBook('deni is cool', 'alberto');
        expect(store._workers[0].name).to.equal('Ina');
        expect(store._workers[0].booksSold).to.equal(1);
    });
    it('receiving incorrect title and correct worker=> error title)', function () {
        // store.stockBooks(['deni is cool-deni', 'az-avtor']);
        // store.hire('alberto', 'engineer');
        //let actual = store.sellBook('tralala', 'alberto');
        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
        store.hire('Ina', 'seller')
        //let actual= store.sellBook('Neshto', 'Ina');

        expect(() => store.sellBook('Neshto', 'Ina')).to.Throw('This book is out of stock')
    });
    it('receiving correct title and incorrect worker=> error worker)', function () {
        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
        store.hire('Ina', 'seller')
        //let actual = store.sellBook('tralala', 'alberto');
        expect(() => store.sellBook('Inferno', 'Tom')).to.Throw('Tom is not working here')
    })
    //})
    //describe('printworkers', function(){
    it('receiving correct input', function () {
        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
        store.hire('George', 'seller')
        store.hire('Ina', 'seller')
        store.hire('Tom', 'juniorSeller')
        store.sellBook('Inferno', 'Ina');
       store.stockBooks(['Harry Potter-J.Rowling']);
        store.fire('Tom')
        let actual = store.printWorkers();
        expect(actual).to.equal('Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:1')
    })
    //})
})