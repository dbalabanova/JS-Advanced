function solve() {
   let firstPlayerCards = Array.from(document.querySelectorAll('#player1Div img'));
   let secondPlayerCards = Array.from(document.querySelectorAll('#player2Div img'));
   let allCards = secondPlayerCards.concat(firstPlayerCards)
   console.log(allCards);

   let history = [];
   let currentScore = {
      first: 0,
      second: 0
   };
   
   let firstCard
   let secondCard
   let firstCardName
   let secondCardName
   let spanFirstPlayer
   let spanSecondPlayer
   allCards.map(x => x.addEventListener('click', function whiteCard(e) {
      //debugger
      let clickedCard = e.target;
      //console.log(clickedCard);

      clickedCard.src = 'images/whiteCard.jpg';
      // console.log(clickedCard.parentElement);

      if (clickedCard.parentElement.id === 'player1Div') {
         firstCard = clickedCard;
         firstCardName = Number(clickedCard.name.trim())
         spanFirstPlayer = document.querySelector('#result span');
         spanFirstPlayer.innerHTML = firstCardName;
         currentScore['first']=firstCardName;
      } else if (clickedCard.parentElement.id === 'player2Div') {
         secondCard = clickedCard;
         secondCardName = Number(clickedCard.name.trim())
         spanSecondPlayer = Array.from(document.querySelectorAll('#result span'));
         spanSecondPlayer[spanSecondPlayer.length - 1].innerHTML = secondCardName;
         currentScore['second']=secondCardName;
      
      }
      if (firstCardName > secondCardName) {
        // firstCard.setAttribute('border','2px solid green' );
         firstCard.style.border='2px solid green';
         //secondCard.setAttribute('border', '2px solid red');
         secondCard.style.border= '2px solid red';
      }else if(secondCardName>firstCardName){
         //firstCard.setAttribute('border', '2px solid red');
        // secondCard.setAttribute('border', '2px solid green'); 
         firstCard.style.border='2px solid red';
         secondCard.style.border= '2px solid green';

      }
     // debugger
      if(currentScore['first']!==0 && currentScore['second']!==0) {
         let historyOutput = document.getElementById('history')
         historyOutput.innerHTML +=`[${currentScore['first']} vs ${currentScore['second']}] `
      currentScore={
         first:0,
         second:0
      }
      spanFirstPlayer.innerHTML=null;
      spanSecondPlayer[spanSecondPlayer.length - 1].innerHTML=null
      } 
     
      
     console.log(currentScore);
      
   }));
   

}