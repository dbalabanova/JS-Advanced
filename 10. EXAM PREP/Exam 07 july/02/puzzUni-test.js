const PizzUni=require('./02. PizzUni_Ресурси');
const expect=require('chai').expect


describe('puzzUni', function (){

    describe ('if constructor works properly', function(){
        it('if registeredUsers is an ampty array',function(){
            let actual = new PizzUni();
            expect(actual.registeredUsers).to.deep.equal([])
        });
        it("if availableProducts is object with pizza and drinks "
        ,function(){
            let actual = new PizzUni();
            expect(actual.availableProducts).to.deep.equal({
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            })
        });
        it('if order is ana empty array',function(){
            let actual = new PizzUni();
            expect(actual.orders).to.deep.equal([])
        });
         it('constructor receiving sth',function(){
            let actual = new PizzUni('sth');
            expect(actual).to.deep.equal({
                registeredUsers:[],
                availableProducts:{
                    pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                    drinks: ['Coca-Cola', 'Fanta', 'Water']
                },
                orders:[]
            })
        })
    })
   
    describe('registerUser',function(){
        it('receiving string for email that is correct=>registerUsers[email]'
        ,function() {
            let newClass= new PizzUni();
            let actual = newClass.registerUser("deni@deni.com");
            expect(actual).to.deep.equal({email:'deni@deni.com',
        orderHistory:[]})
        });
        it('receiving string for email that is correct=>registerUsers[email]'
        ,function() {
            let newClass= new PizzUni();
            let actual = newClass.registerUser("deni@deni.com");
            expect(newClass.registeredUsers[0].email).to.equal('deni@deni.com')
        })
        it('receiving nothing for email=>'
        ,function() {
            let newClass= new PizzUni();
            let actual = newClass.registerUser();
            expect(actual).to.deep.equal({
                email: undefined,
                orderHistory:[]
            })
        })
        it('receiving string for email that is correct=>registerUsers[email]'
        ,function() {
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com")
            
            expect(()=>newClass.registerUser("deni@deni.com")).to.Throw(`This email address (deni@deni.com) is already being used!`)
        })
    })

    describe('makeAnOrder(email,orderedPizza,orderedDrink)', function(){
        it('if email is not registered', function(){
            let newClass= new PizzUni();
            expect(()=>newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola')).to.Throw("You must be registered to make orders!")
        });
        it('if pizza is not correct', function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com")
            expect(()=>newClass.makeAnOrder('deni@deni.com','Bulgarian Style','Coca-Cola')).to.Throw("You must order at least 1 Pizza to finish the order.")
        })
        it('if drink is not correct', function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com")
            expect(()=>newClass.makeAnOrder('deni@deni.com','Bulgarian Style','Pepsi')).to.Throw()
        })
        it('if everything is correct', function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            let actual=newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola')
            expect(newClass.registeredUsers).to.deep.equal([{email:'deni@deni.com',
            orderHistory:[{
                orderedPizza:'Italian Style',
                orderedDrink:'Coca-Cola',
            }]}])
            expect(newClass.orders).to.deep.equal([{
                orderedPizza:'Italian Style',
                orderedDrink:'Coca-Cola',
                email:'deni@deni.com',
                status:'pending'
            }])
        });

        it('if everything is correct', function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            let actual=newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola');
            //newClass.orders.length-1
           expect(actual).to.equal(newClass.orders.length-1)
        })
    })

    describe('completeOrder',function(){
        it('changing status to completed and returning the object',function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola');
            expect(newClass.completeOrder()).to.deep.equal({
                orderedPizza:'Italian Style',
                orderedDrink:'Coca-Cola',
                email:'deni@deni.com',
                status:'completed'
            })
        })
    })

    describe('detailsAboutMyOrder({id})',function(){
        it('receive correct index',function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola');
            expect(newClass.detailsAboutMyOrder(0)).to.equal("Status of your order: pending")
        })
        it('receive incorrect index',function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola');
            expect(newClass.detailsAboutMyOrder(1)).to.equal()
        })
    })

    describe('doesTheUserExist({email})',function(){
        it('reciving correct email', function(){
            let newClass= new PizzUni();
            newClass.registerUser("deni@deni.com");
            newClass.makeAnOrder('deni@deni.com','Italian Style','Coca-Cola');
            expect(newClass.doesTheUserExist("deni@deni.com")).deep.equal({email:'deni@deni.com',
            orderHistory:[{
                orderedPizza:'Italian Style',
                orderedDrink:'Coca-Cola',
            }]})
        })
    })
})