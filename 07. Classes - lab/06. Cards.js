let result = (function () {
    let validFases = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] 
    class Card {
        constructor(face, suit) {
            this._face = face;
            this._suit = suit;
        }
       
        get face() {
           
            return this._face
        }
        set face(face){
            if(!validFases.includes(face)){
               //throw new Error ('Error')
               console.log('Error')
            }
        }get suit() {
            return this._suit
        }
        set suit(suit){
            if(!Suits.hasOwnProperty(suit)){
              //throw new Error ('Error')
              console.log('Error')

            }
        }
    }
    let Suits = {
        SPADES: 1,
        HEARTS: 2,
        DIAMONDS: 3,
        CLUBS: 4
    }
    return {
        Suits: Suits,
        Card: Card
    }
}());
let Card = result.Card;
let Suits = result.Suits;

// let card = new Card ('A',Suits.CLUBS);
// card.face='A';
// card.suit=Suits.DIAMONDS;
//let card2 = new Card("1", Suits.DIAMONDS);
let card3=new Card("2",Suits.Pesho);
let card4=new Card("3",'hearts');