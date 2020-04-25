function acceptance() {
let company = document.querySelector('#fields > td> input[name="shippingCompany"]');
let product = document.querySelector('#fields > td> input[name="productName"]');
let quantity = document.querySelector('#fields > td> input[name="productQuantity"]');
let scrape = document.querySelector('#fields > td> input[name="productScrape"]');

const addItButton = document.getElementById('acceptance')
addItButton.addEventListener('click',addingProductToWareHouse);

function addingProductToWareHouse(){
	companyName=company.value
	productName=product.value
	productQuantity=quantity.value

	if(companyName !=='' && productName!=='' && !isNaN(productQuantity) && !isNaN(scrape.value) && (productQuantity-scrape.value)>0){
		let list = document.querySelector('#warehouse > h1')
		let createDiv= document.createElement('div');
		let createP = document.createElement('p');
		let createButton = document.createElement('button');
		createButton.setAttribute('type','button');

		createP.textContent=`[${companyName}] ${productName} - ${productQuantity-scrape.value} pieces`
		createButton.textContent='Out of stock'

		createDiv.appendChild(createP);
		createDiv.appendChild(createButton);
		list.appendChild(createDiv);

	company.value=''
	product.value=''
	quantity.value=''
	scrape.value=''

	createButton.addEventListener('click', removeProduct);

	function removeProduct(){
		createDiv.remove()
	}
}
}
}