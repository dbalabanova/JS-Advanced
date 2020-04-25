function addItem() {
  
    const newItemText = document.getElementById('newItemText')
    const newItemValue = document.getElementById('newItemValue')
    const newcontentText = newItemText.value;
    const newContentValue = newItemValue.value;
    const dropDown = document.getElementById('menu');
    let createOptionElement = document.createElement('option');
  //  const addButton = document.querySelector('article > input[type=button]');
        createOptionElement.innerHTML  = newcontentText 
        createOptionElement.value  = newContentValue;
        dropDown.appendChild(createOptionElement);
        newItemText.value = '';
        newItemValue.value = '';

}