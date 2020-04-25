function solve() {
  let rightAnswers = 0;
  let tempIndex=0;
  let answer = Array.from(document.querySelectorAll('.quiz-answer'))
    .map(x => x.addEventListener('click', function nextQuestion(e) {
      let clickedAnswer = e.target.innerHTML
      if(clickedAnswer==='onclick'|| clickedAnswer==='JSON.stringify()'
      || clickedAnswer==='A programming API for HTML and XML documents'){
        rightAnswers++;
      }
      //debugger
      let currentQuestion=document.querySelectorAll('#quizzie section')[tempIndex];
      currentQuestion.style.display='none';
      //currentQuestion.classList.add('hidden')
      //console.log(currentQuestion);
      
      
      //console.log(nextQuestion);
      if(document.querySelectorAll('#quizzie section')[tempIndex+1]){
        let nextQuestion=document.querySelectorAll('#quizzie section')[tempIndex+1]
        //nextQuestion.classList.remove('hidden');
      nextQuestion.style.display='block';
      tempIndex++;

      } else {
        document.querySelector('#results').style.display='block'
        if(rightAnswers===3){
          document.querySelector('.results-inner h1').innerHTML="You are recognized as top JavaScript fan!"
        } else {
          document.querySelector('.results-inner h1').innerHTML=`You have ${rightAnswers} right answers`
        
        }
       // showResult(rightAnswers)
      }

      //debugger
    }))
// function showResult(rightAnswers){
 
// }
}
