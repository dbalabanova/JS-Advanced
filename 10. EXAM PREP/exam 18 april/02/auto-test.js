const AutoService = require("../02/02. Auto Service_Ресурси");
const expect = require("chai").expect;

describe("autoservice", function() {
  it("in constructor works properly", function() {
    let autoService = new AutoService();
    expect(autoService.garageCapacity).to.equal(undefined);
    expect(autoService.workInProgress).to.deep.equal([]);
    expect(autoService.backlogWork).to.deep.equal([]);
  });
  it("in constructor works properly", function() {
    let autoService = new AutoService(2);
    expect(autoService.garageCapacity).to.equal(2);
    expect(autoService.workInProgress).to.deep.equal([]);
    expect(autoService.backlogWork).to.deep.equal([]);
  });

  describe("availableSpace", function() {
    it("reciving capacity 2", function() {
      let autoService = new AutoService(2);
      expect(autoService.availableSpace).to.equal(2);
    });
    it("reciving capacity 2 and gets one car", function() {
        let autoService = new AutoService(2);
        autoService.signUpForReview("Peter", "CA1234CA", {
            engine: "MFRGG23",
            transmission: "FF4418ZZ",
            doors: "broken"
          });
        expect(autoService.availableSpace).to.equal(1);
      });
  });

  describe("signupForReview", function() {
    it("receiving correct arguments", function() {
      let autoService = new AutoService(2);
      autoService.signUpForReview("Peter", "CA1234CA", {
        engine: "MFRGG23",
        transmission: "FF4418ZZ",
        doors: "broken"
      });
      expect(autoService.workInProgress).to.deep.equal([{
        plateNumber:'CA1234CA',
        clientName:'Peter',
        carInfo: { engine: "MFRGG23",
        transmission: "FF4418ZZ",
        doors: "broken"}
      }])
      expect(autoService.workInProgress.length).to.equal(1)
    });
    it("receiving incorrect arguments", function() {
        let autoService = new AutoService(0);
        autoService.signUpForReview("Peter", "CA1234CA", {
          engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"
        });
        expect(autoService.backlogWork).to.deep.equal([{
          plateNumber:'CA1234CA',
          clientName:'Peter',
          carInfo: { engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"}
        }])
      });
    
  });

  describe('carInfo',function(){
     it('it recives har that isn`t there',function(){
        let autoService = new AutoService(0);
        autoService.signUpForReview("Peter", "CA1234CA", {
          engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"
        });
        let actual = autoService.carInfo('PB9999PB', 'PHILIP')
        expect(actual).to.equal('There is no car with platenumber PB9999PB and owner PHILIP.')
     }) 
     it('it recives har that is there',function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview("Peter", "CA1234CA", {
          engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"
        });
        let actual = autoService.carInfo('CA1234CA', 'Peter')
        expect(actual).to.deep.equal({
            plateNumber:'CA1234CA',
            clientName:'Peter',
            carInfo: { engine: "MFRGG23",
            transmission: "FF4418ZZ",
            doors: "broken"}
          })
     });
     it('it recives har that is there',function(){
        let autoService = new AutoService(0);
        autoService.signUpForReview("Peter", "CA1234CA", {
          engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"
        });
        let actual = autoService.carInfo('CA1234CA', 'Peter')
        expect(actual).to.deep.equal({
            plateNumber:'CA1234CA',
            clientName:'Peter',
            carInfo: { engine: "MFRGG23",
            transmission: "FF4418ZZ",
            doors: "broken"}
          })
     }) 
  })

  describe('repairCar',function(){
      it('there is a broekn car',function(){
        let autoService = new AutoService(0);
        autoService.signUpForReview("Peter", "CA1234CA", {
          engine: "MFRGG23",
          transmission: "FF4418ZZ",
          doors: "broken"
        });
        expect(autoService.repairCar()).to.equal('Your doors were repaired.')
      })
      it('there is not broekn car',function(){
        let autoService = new AutoService(0);
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
        expect(autoService.repairCar()).to.deep.equal('Your car was fine, nothing was repaired.')
      })
      it('there is no car',function(){
        let autoService = new AutoService(1);
        expect(autoService.repairCar()).to.deep.equal('No clients, we are just chilling...')
      })
  })
  it ('checks final',function(){
    let autoService = new AutoService(2);

    autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
    autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
    autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
    expect(autoService.repairCar()).to.deep.equal('Your doors were repaired.')
    expect(autoService.carInfo('PB9999PB', 'PHILIP')).to.deep.equal('There is no car with platenumber PB9999PB and owner PHILIP.')
    expect(autoService.availableSpace).to.equal(1)
 
})
});



//   it("receiving incorrect arguments", function() {
    //     let autoService = new AutoService(0);
    //     autoService.signUpForReview("Peter", {
    //       engine: "MFRGG23",
    //       transmission: "FF4418ZZ",
    //       doors: "broken"
    //     });
    //     expect(autoService.backlogWork).to.deep.equal( [{
    //             "carInfo": undefined,
    //             "clientName": "Peter",
    //             "plateNumber": {
    //               "doors": "broken",
    //               "engine": "MFRGG23",
    //               "transmission": "FF4418ZZ"
    //             }
    //          }
    //         ])
    //   });
