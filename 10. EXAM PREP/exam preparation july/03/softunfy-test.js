const SoftUniFy = require("../03/03. Softunify_Ресурси");
const expect = require("chai").expect;

describe("softunify", function() {
  it("if constructor works properly", function() {
    let sofunify = new SoftUniFy();
    expect(sofunify.allSongs).to.deep.equal({});
  });

  describe("downloadSong", function() {
    it("receive correct artist, song ,lyrics", function() {
      let sofunify = new SoftUniFy();
      let actual = sofunify.downloadSong(
        "Eminem",
        "Venom",
        "Knock, Knock let the devil in..."
      );
      expect(actual.allSongs).to.deep.equal({
        Eminem: {
          rate: 0,
          votes: 0,
          songs: ["Venom - Knock, Knock let the devil in..."]
        }
      });
    });
    it("receive correct artist, song ,lyrics twice", function() {
      let sofunify = new SoftUniFy();
      sofunify.downloadSong(
        "Eminem",
        "Venom",
        "Knock, Knock let the devil in..."
      );
      let actual = sofunify.downloadSong(
        "Eminem",
        "Phenomenal",
        "IM PHENOMENAL..."
      );
      expect(actual.allSongs).to.deep.equal({
        Eminem: {
          rate: 0,
          votes: 0,
          songs: [
            "Venom - Knock, Knock let the devil in...",
            "Phenomenal - IM PHENOMENAL..."
          ]
        }
      });
    });
    it("receive correct artist, song ,lyrics", function() {
      let sofunify = new SoftUniFy();
      sofunify.downloadSong(
        "Eminem",
        "Venom",
        "Knock, Knock let the devil in..."
      );
      sofunify.downloadSong("Eminem", "Phenomenal", "IM PHENOMENAL...");
      let actual = sofunify.downloadSong(
        "Dub Fx",
        "Light Me On Fire",
        "You can call me a liar.. "
      );
      expect(actual.allSongs).to.deep.equal({
        Eminem: {
          rate: 0,
          votes: 0,
          songs: [
            "Venom - Knock, Knock let the devil in...",
            "Phenomenal - IM PHENOMENAL..."
          ]
        },
        "Dub Fx": {
          rate: 0,
          votes: 0,
          songs: ["Light Me On Fire - You can call me a liar.. "]
        }
      });
    });
  });

  describe("playSong", function() {
    it("receive incorrect song", function() {
      let sofunify = new SoftUniFy();
      sofunify.downloadSong(
        "Eminem",
        "Venom",
        "Knock, Knock let the devil in...");
        let actual = sofunify.playSong('my song');
        expect(actual).to.equal(`You have not downloaded a my song song yet. Use SoftUniFy's function downloadSong() to change that!`)
    });
    it("dont have downloaded songs", function() {
        let sofunify = new SoftUniFy();
          let actual = sofunify.playSong('my song');
          expect(actual).to.equal(`You have not downloaded a my song song yet. Use SoftUniFy's function downloadSong() to change that!`)
      });
      it("receive correct song", function() {
        let sofunify = new SoftUniFy();
      sofunify.downloadSong(
        "Eminem",
        "Venom",
        "Knock, Knock let the devil in...");
        let actual = sofunify.playSong('Venom');
          expect(actual).to.equal(`Eminem:\nVenom - Knock, Knock let the devil in...\n`)
      });
  });

  describe('songsList', function(){
      it('there is a list to show',function(){
        let sofunify = new SoftUniFy();
        sofunify.downloadSong(
          "Eminem",
          "Venom",
          "Knock, Knock let the devil in..."
        );
        sofunify.downloadSong("Eminem", "Phenomenal", "IM PHENOMENAL...");
        sofunify.downloadSong(
          "Dub Fx",
          "Light Me On Fire",
          "You can call me a liar.. ");
          let actual = sofunify.songsList;
          expect(actual).to.equal(`Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. `)
      });
      it('there is no list to show', function(){
        let sofunify = new SoftUniFy();
        expect(sofunify.songsList).to.equal('Your song list is empty')
      })
  })
  describe('rateartis',function(){
      it('if it does not receive twi arguments', function(){
        let sofunify=new SoftUniFy();
       let actual= sofunify.rateArtist('Eminem');
       expect(actual).to.equal('The Eminem is not on your artist list.')
      });
      it('if it does not receive twi arguments', function(){
        let sofunify=new SoftUniFy();
       let actual= sofunify.rateArtist('Eminem',50);
       expect(actual).to.equal('The Eminem is not on your artist list.')
      });
  })
});
