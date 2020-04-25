function solve() {
	let input = document.getElementById('input').value;
	let result = document.getElementById('resultOutput');
	let pattern = /[a-zA-Z0-9]+/g
	input=input.match(pattern)
	let sumofAllDigits = input
		.map(Number)
		.reduce((a, b) => a + b)
		
		//let length=sumofAllDigits.split('').length
		
		if(sumofAllDigits>=10){
			debugger
			while(sumofAllDigits>=10){
				
			sumofAllDigits= sumofAllDigits.toString().split('').map(Number).reduce((a,b)=>a+b,0);
				//length=sumofAllDigits.split('').length;

			}
		}
		//debugger
		sumofAllDigits=Number(sumofAllDigits)
		//console.log(sumofAllDigits);

	let left = input
	let portion = left.splice(0,sumofAllDigits)
	let leftFinal = left.splice(left.length-sumofAllDigits,sumofAllDigits);
	left=left.join('');
	let binaryNumbers = [];
	let decimalNumbers =[];
	let output=[]
	for (let i = 0; i < left.length/8; i++) {
		//debugger
		let part=left.split('').slice(i*8,i*8+8);
		//part=Number(part.join(''));
		binaryNumbers.push(part.join(''))
	}
	binaryNumbers.forEach((element)=>{
		let dec = parseInt(element,2);
		decimalNumbers.push(dec)
	})
decimalNumbers.forEach((el)=>{
	let letter = String.fromCharCode(el);
	output.push(letter)
})
result.innerHTML=output.join('')

}