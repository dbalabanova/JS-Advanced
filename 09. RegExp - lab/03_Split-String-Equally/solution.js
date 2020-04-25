function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById('result')

    let arr = [];
    if (text.length % number === 0) {
        for (let i = 0; i < text.length / number; i++) {
            let part = text.substr(number * i, number);
            console.log(part)
            arr.push(part);
            //result.innerHTML=arr.join(' ')
        }
    }
    else if (text.length % number !== 0 && text.length - number > 0) {
        debugger

        let neededLetters = text.slice(0, number-text.length % number);
        for (let i = 0; i < parseInt(text.length / number); i++) {
            let part = text.substr(number * i, number);
            arr.push(part);

        }
        let finalPart = ''
        finalPart += text.slice((parseInt(text.length / number) * number), text.length)
        finalPart += neededLetters;
        arr.push(finalPart)
        //result.innerHTML=arr.join(' ')
    } else if (text.length % number !== 0 && text.length - number < 0) {
        let numLettersToGet = number-text.length;
        let toPush='';
        toPush+=text;
        toPush+=text.slice(0,numLettersToGet);
        arr.push(toPush)
    }
    result.innerHTML = arr.join(' ')
}