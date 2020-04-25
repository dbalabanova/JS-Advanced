let state = 0;

function growingWord() {
 // let state;
  //const colorMap = ['#5B88BD','#A40014','#8FF897']
  const colorMap = ['blue', 'green', 'red']
  let allParagraphs = document.getElementsByTagName("p");
  let word = allParagraphs[allParagraphs.length - 1];
  //console.log((word.style.fontSize));

  if (state >= colorMap.length) {
    state = 0;
  }
  word.style.color = colorMap[state];
  state++;
  let fontsize = window.getComputedStyle(word).fontSize.replace("px","");
  console.log(fontsize);
  
  fontsize === "0" ? fontsize = "2" : fontsize*=2
  
  word.style.fontSize = fontsize.toString() + 'px'

  //console.log(fontsize)
}