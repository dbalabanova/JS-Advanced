const Warehouse = require('../08. Unit testing - ex/warehouse')
const expect=require('chai').expect;

describe('warehouse', function() {
    let warehouse;
    beforeEach (()=>{
        warehouse= new Warehouse(100)
    })
    it('get capacity recieve not a number => error Invalid given warehouse space', function() {
        warehouse.capacity=2
        let expected=2;
        expect(warehouse.capacity).to.be.equal(expected)
    });
    it('the constructor gets negative number => error Invalid given warehouse space', function() {
        
          expect(()=>new Warehouse(-1)).to.Throw('Invalid given warehouse space')
      });
      it('the constructor gets 0 number => error Invalid given warehouse space', function() {
        
        expect(()=>new Warehouse(0)).to.Throw('Invalid given warehouse space')
    });
    it('the constructor gets string  => error Invalid given warehouse space', function() {
        
        expect(()=>new Warehouse('deni')).to.Throw('Invalid given warehouse space')
    });
    it('the constructor gets nothig  => error Invalid given warehouse space', function() {
        
        expect(()=>new Warehouse()).to.Throw('Invalid given warehouse space')
    });
    it('the constructor gets valid number  => the is capacity and available products', function() {
        
        expect(Object.entries(warehouse.availableProducts).length).to.equal(2,"{'Food': {}, 'Drink': {}}")
        expect(Object.keys(warehouse.availableProducts['Food']).length).to.equal(0)
    });
    it('get and set capacity works correctly with the correct number', function() {
         warehouse.capacity=2;
         let actual =warehouse.capacity;
         let expected=2;
         expect(actual).to.equal(expected)
    });


    it('addProduct(type,product,quantity)with correct parameters(food,banichka,20)', function() {
        let actual = warehouse.addProduct('Food','banichka',20);
        let expected = 20;
        expect(warehouse.availableProducts['Food']['banichka']).to.equal(20)
        
    });
    it('addProduct(type,product,quantity)with correct parameters(drink,airqn,2)', function() {
        let actual = warehouse.addProduct('Drink','airqn',2);
        let expected = 2;
        expect(warehouse.availableProducts['Drink']['airqn']).to.equal(2)
        
    });
    it('addProduct(type,product,quantity)with correct parameters(drink,airqn,2) but equal so it should print sum', function() {
        warehouse.addProduct('Drink','airqn',2);
        warehouse.addProduct('Drink','airqn',2);
        let expected = 4;
        expect(warehouse.availableProducts['Drink']['airqn']).to.equal(4)
        
    });
    it('addProduct(type,product,quantity)with morw quantity that is the capacity(drink,airqn,200)', function() {
        // let actual = warehouse.addProduct('Drink','airqn',200);
        // let expected = 2;
        expect(()=>{warehouse.addProduct('Drink','airqn',200)}).to.Throw('There is not enough space or the warehouse is already full')
    });
    it('addProduct(type,product,quantity)with morw quantity that is the capacity(food,banichka,200)', function() {
        // let actual = warehouse.addProduct('Drink','airqn',200);
        // let expected = 2;
        expect(()=>{warehouse.addProduct('Food','banichka',200)}).to.Throw('There is not enough space or the warehouse is already full')
    });
    it('addProduct(type,product,quantity)with morw quantity that is the capacity(food,banichka,200)', function() {
         let actual = warehouse.addProduct('Drink','airqn',10);
        // let expected = 2;
        expect(typeof actual).to.equal('object')
    });

    it('orderProducts(type),(food), sort (bread-10,cozunacs-20,trici-5)', function() {
          warehouse.addProduct('Food','bread',10);
          warehouse.addProduct('Food','trici',5);
         let expected = warehouse;
        expect(Object.keys(warehouse.availableProducts['Food'])[0]).to.equal('bread');
    });
    it('orderProducts(type),(drink), sort (water-10,fresh-5,)', function() {
        warehouse.addProduct('Drink','water',10);
        warehouse.addProduct('Drink','fresh',5);
       let expected = warehouse;
      expect(Object.keys(warehouse.availableProducts['Drink'])[0]).to.equal('water');
  });

  it('occupiedCapacity(), added (water-10,bread-5,)', function() {
    warehouse.addProduct('Drink','water',10);
    warehouse.addProduct('Food','bread',5);
   let expected = 15;
  expect(warehouse.occupiedCapacity()).to.equal(15);
});
it('occupiedCapacity(), added nothing', function() {

   let expected = 0;
  expect(warehouse.occupiedCapacity()).to.equal(0);
});


it('revision(), added (water-10,fresh-5,)', function() {
    warehouse.addProduct('Drink','water',10);
    warehouse.addProduct('Food','bread',5);
    warehouse.addProduct('Drink','fresh',10);
    warehouse.addProduct('Food','banichka',5);
   
  expect(typeof warehouse.revision()).to.equal('string');
});
it('revision(), added nothing', function() {

  expect(warehouse.revision()).to.equal('The warehouse is empty');
});
// it('test revison returns the correct message', ()=> {
//     warehouse.addProduct('Food', 'bread', 5);
//     warehouse.addProduct('Drink', 'boza', 15);

//     let actual = warehouse.revision();
//     let expected = 
//     'Product type - [Food]' +
//     '\n- bread 5' +
//     '\nProduct type - [Drink]' +
//     '\n- boza 15' 

//     expect(actual).to.be.equal(expected, 'revision does not return correct message');
// });


it('scrapeAProduct(product,quantity), (water,2)=> water 10', function() {
    warehouse.addProduct('Drink','water',10);
    warehouse.addProduct('Food','bread',5);
    warehouse.addProduct('Drink','fresh',10);
    warehouse.addProduct('Food','banichka',5);
   
  expect(warehouse.scrapeAProduct('water',10)['water']).to.equal(0);
});
it('scrapeAProduct(product,quantity), (water,2)=> water 2', function() {
    warehouse.addProduct('Drink','water',10);
    warehouse.addProduct('Food','bread',5);
    warehouse.addProduct('Drink','fresh',10);
    warehouse.addProduct('Food','banichka',5);
   
  expect(warehouse.scrapeAProduct('water',2)['water']).to.equal(8);
});
it('scrapeAProduct(product,quantity), (bread,2)=> bread 2', function() {
    warehouse.addProduct('Drink','water',10);
    warehouse.addProduct('Food','bread',5);
    warehouse.addProduct('Drink','fresh',10);
    warehouse.addProduct('Food','banichka',5);
   
  expect(warehouse.scrapeAProduct('bread',2)['bread']).to.equal(3);
});
it('scrapeAProduct(product,quantity), receiving not correct=>error', function() {
  expect(()=>{warehouse.scrapeAProduct('fresh',2)}).to.Throw('fresh do not exists')
});
})