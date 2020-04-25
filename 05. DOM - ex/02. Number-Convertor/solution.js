function solve() {
    let selectMenuTo = document.getElementById('selectMenuTo');

    function createOptions() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';
        selectMenuTo.appendChild(binaryOption);

        let hexadecimalOption = document.createElement('option');
        hexadecimalOption.textContent = 'Hexadecimal';
        hexadecimalOption.value = 'hexadecimal';
        selectMenuTo.appendChild(hexadecimalOption);
    }
    createOptions();

    let clicker = document.querySelector('#container button');
    clicker.addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result;
        if (selectMenuTo.value === 'binary') {
            result = dcimalToBinary(number)
        }
        else if (selectMenuTo.value === 'hexadecimal') {
            result = decimalToHexadecimal(number)
        }

        let resultElement = document.getElementById('result');
        resultElement.value = result;
        console.log(result);

    }
    function dcimalToBinary(number) {
        return (number >>> 0).toString(2)
    }
    function decimalToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }


}