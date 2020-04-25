function solve() {
    let numbers = Array.from((document.querySelectorAll('input[type="number"]')));
    let buttons = Array.from(document.querySelectorAll('button'));
    let message = document.querySelector('#check >p');
    let table = document.querySelector('#exercise > table');
//console.log(message);
    buttons[0].addEventListener('click', function check(e) {

        let matrix = [[Number(numbers[0].value), Number(numbers[1].value), Number(numbers[2].value)],
                     [Number(numbers[3].value), Number(numbers[4].value), Number(numbers[5].value)],
                     [Number(numbers[6].value), Number(numbers[7].value), Number(numbers[8].value)]];
       
        let whatToDo = magic(matrix);
      
        if (whatToDo === true) {
            table.style.border = "2px solid green"
            message.style.color = 'green'
            message.innerHTML = "You solve it! Congratulations!";
            
        } else {
            table.style.border = "2px solid red";
            message.style.color = 'red'
            message.innerHTML = "NOP! You are not done yet...";
        }
        function magic(array) {
            let sum = array[0].reduce((a, b) => a + b, 0);
            let isMagic = true;
            for (let i = 0; i < array.length; i++) {
                let sumRow = 0;
                let sumCol = 0;
                sumRow = array[i].reduce((a, b) => a + b, 0)
                sumCol = array.map((x) => x[i]).reduce((a, b) => a + b, 0);
                if (sumRow !== sumCol || sumCol !== sum || sumRow !== sum) {
                    isMagic = false;
                }
            }
            return isMagic
        }
    });
    buttons[1].addEventListener('click', function clear() {
        numbers.map(x => x.value = '');
        table.style.border = "none";
        //createP.style.color = ''
        message.innerHTML = "";
    })
}