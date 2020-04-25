function addItem() {
    let inputField=document.getElementById('newText');
    let nextLineElement=document.createElement('li');
    nextLineElement.innerHTML = inputField.value + " "
    let unorderdList = document.getElementById('items')
    unorderdList.appendChild(nextLineElement);
    let removeButton = document.createElement('a');
    removeButton.href='#'
    removeButton.innerHTML='[Delete]'
    nextLineElement.appendChild(removeButton)
    removeButton.addEventListener('click', function clearItem(){
        let itemToDelete = this.parentNode;
        itemToDelete.parentNode.removeChild(itemToDelete) 
    })

}