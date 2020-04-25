let SkiResort = require("./solution");
const expect = require("chai").expect;

describe("SkiResort", function() {
  let res;
  beforeEach(function() {
    res = new SkiResort("Some");
  });

  describe("if constructor works properly", function() {
    it("reciving correct name", function() {
      expect(res.name).to.equal("Some");
      expect(res.voters).to.equal(0);
      expect(res.hotels).to.deep.equal([]);
    });
    it("reciving correct name", function() {
      res = new SkiResort();
      expect(res.name).to.equal(undefined);
      expect(res.voters).to.equal(0);
      expect(res.hotels).to.deep.equal([]);
    });
  });

  describe("getter", function() {
    it("getter  if no voters", function() {
      expect(res.bestHotel).to.equal("No votes yet");
    });
     it('tehere is voters',function() {
        res.build("Sun", 10);
        res.build("Avenue", 5);
        res.book("Sun", 5);
        res.book("Avenue", 5);
        res.leave("Sun", 3, 2);
        res.leave("Avenue", 3, 3);
        res.book("Avenue", 3);
        res.leave("Avenue", 3, 0.5);
        expect(res.bestHotel).to.equal('Best hotel is Avenue with grade 10.5. Available beds: 3');
     })
  });
  describe("build", function() {
    it("receiving incorrect input", function() {
      expect(() => res.build("", 10)).to.Throw("Invalid input");
    });
    it("receiving incorrect input", function() {
      expect(() => res.build("Sun", 0)).to.Throw("Invalid input");
    });
    it("receiving correct input", function() {
      let actual = res.build("Sun", 10);
      expect(actual).to.equal(`Successfully built new hotel - Sun`);
      expect(res.hotels).to.deep.equal([
        {
          name: "Sun",
          beds: 10,
          points: 0
        }
      ]);
    });
    it("receiving correct input", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      expect(res.hotels).to.deep.equal([
        {
          name: "Sun",
          beds: 10,
          points: 0
        },
        {
          name: "Avenue",
          beds: 5,
          points: 0
        }
      ]);
    });
  });

  describe("book", function() {
    it("reciving correct in put", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      expect(res.book("Sun", 5)).to.equal("Successfully booked");
      expect(res.book("Avenue", 5)).to.equal("Successfully booked");
      expect(res.hotels).to.deep.equal([
        {
          name: "Sun",
          beds: 5,
          points: 0
        },
        {
          name: "Avenue",
          beds: 0,
          points: 0
        }
      ]);
    });
    it("receiving more beds that it has", function() {
      res.build("Sun", 10);
      expect(() => res.book("Sun", 15)).to.Throw("There is no free space");
    });
    it("receiving wrong name of Hotel", function() {
      res.build("Sun", 10);
      expect(() => res.book("Avenue", 15)).to.Throw("There is no such hotel");
    });
    it("receiving emty string name", function() {
      res.build("Sun", 10);
      expect(() => res.book("", 15)).to.Throw("Invalid input");
    });
    it("receiving 0 beds", function() {
      res.build("Sun", 10);
      expect(() => res.book("Sun", 0)).to.Throw("Invalid input");
    });
  });
  describe("leave", function() {
    it("receiving correct input", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      expect(res.leave("Sun", 3, 2)).to.equal("3 people left Sun hotel");
      expect(res.leave("Avenue", 3, 3)).to.equal("3 people left Avenue hotel");
      expect(res.voters).to.equal(6);
    });
    it("receiving incorrect input", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      expect(() => res.leave("", 3, 2)).to.Throw("Invalid input");
    });
    it("receiving incorrect input", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      expect(() => res.leave("Sun", 0, 2)).to.Throw("Invalid input");
    });
    it("receiving incorrect input", function() {
      res.build("Sun", 10);
      expect(() => res.leave("Avenue", 1, 2)).to.Throw(
        "There is no such hotel"
      );
    });
  });
  describe("averagegrade", function() {
    it("no voters", function() {
      expect(res.averageGrade()).to.equal("No votes yet");
    });
    it("correct everything", function() {
      res.build("Sun", 10);
      res.build("Avenue", 5);
      res.book("Sun", 5);
      res.book("Avenue", 5);
      res.leave("Sun", 3, 2);
      res.leave("Avenue", 3, 3);
      res.book("Avenue", 3);
      res.leave("Avenue", 3, 0.5);
      expect(res.averageGrade()).to.equal(`Average grade: 1.83`);
    });
  });
});
