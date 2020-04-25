function addItem() {
let inputField=document.getElementById('newItemText');
let nextLineElement=document.createElement('li');
nextLineElement.innerHTML = inputField.value
let unorderdList = document.getElementById('items')
unorderdList.appendChild(nextLineElement);

}