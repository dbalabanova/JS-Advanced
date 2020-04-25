function solve() {
//let links = document.querySelectorAll('.link-1');

let obj = {
  'Soft': 1,
  'Google': 2,
  'Tube': 4,
  'Wiki': 4,
  'mail': 7,
  'stack': 6
}
let visited = Array.from(document.querySelectorAll('.link-1 >p'));
//console.log(visited);

//document.querySelector("#page1 > div > div:nth-child(1) > p")
document.addEventListener("click", e =>{
  let name= e.target.textContent;
  if(name==='Soft' || name==='Uni'){
  obj.Soft++;
  visited[0].textContent=`visited ${obj['Soft']} times`;
  } else if (name==='Google'){
    obj.Google++;
  visited[1].textContent=`visited ${obj['Google']} times`;
  }
  else if (name==='You' || name==='Tube'){
    obj.Tube++;
  visited[2].textContent=`visited ${obj['Tube']} times`;
  }else if (name==='Wiki' || name==='pedia'){
    obj.Wiki++;
  visited[3].textContent=`visited ${obj['Wiki']} times`;

  } else if (name==='G' || name==='mail'){
    obj.mail++;
  visited[4].textContent=`visited ${obj['mail']} times`;

  }else if (name==='stack' || name==='overflow'){
    obj.stack++;
  visited[5].textContent=`visited ${obj['stack']} times`;

  }
})

}


// function solve() { 
// 	let softuni = document.getElementsByTagName("a")[0];
// 	let softuniSite = softuni.textContent.trim(); 
// 	softuni.addEventListener("click", softuniF); 
// 	let softuniClicks = 2; 
// 	function softuniF(){ 
// 		console.log(document 
// 						.getElementsByTagName("p")[0] 
// 						.textContent = visited ${softuniClicks++} times ) 
// 						}; 

// 	let google = document.getElementsByTagName("a")[1]; 
// 	let googleSite = softuni.textContent.trim(); 
// 	google.addEventListener("click", googleF); 
// 	let googleClicks = 3; 
// 	function googleF(){ 
// 		console.log(document 
// 						.getElementsByTagName("p")[1] 
// 						.textContent = visited ${googleClicks++} times ) 
// 						}; 

// 	let youtube = document.getElementsByTagName("a")[2]; 
// 	let youtubeSite = youtube.textContent.trim(); 
// 	youtube.addEventListener("click", youtubeF); 
// 	let youtubeClicks = 5; 
// 	function youtubeF(){ 
// 		console.log(document 
// 						.getElementsByTagName("p")[2] 
// 						.textContent = visited ${youtubeClicks++} times ) 
// 						}; 

// 	let wiki = document.getElementsByTagName("a")[3]; 
// 	let wikiSite = wiki.textContent.trim(); 
// 	wiki.addEventListener("click", wikiF); 
// 	let wikiClicks = 5; 
// 	function wikiF(){ 
// 		console.log(document 
// 						.getElementsByTagName("p")[3] 
// 						.textContent = visited ${wikiClicks++} times ) 
// 						}; 

// 	let gmail = document.getElementsByTagName("a")[4]; 
// 	let gmailSite = gmail.textContent.trim(); 
// 	gmail.addEventListener("click", gmailF); 
// 	let gmailClicks = 8; 
// 	function gmailF(){ 
// 		console.log(document 
// 				.getElementsByTagName("p")[4] 
// 				.textContent = visited ${gmailClicks++} times )
// 				}; 

// 	let stack = document.getElementsByTagName("a")[5]; 
// 	let stackSite = stack.textContent.trim(); 
// 	stack.addEventListener("click", stackF); 
// 	let stackClicks = 7; 
// 	function stackF(){ 
// 		console.log(document 
// 				.getElementsByTagName("p")[5] 
// 				.textContent = visited ${stackClicks++} times ) 
// 				};
// };