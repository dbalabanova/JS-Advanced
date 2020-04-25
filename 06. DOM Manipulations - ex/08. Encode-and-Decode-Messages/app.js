function encodeAndDecodeMessages() {
    
    let textAreas = document.getElementsByTagName('textarea')
    const writeMessage = textAreas[0]
    const receiveMessage = textAreas[1]
    
    let buttons = document.getElementsByTagName('button')
    const encodeBtn = buttons[0]
    const decodeBtn = buttons[1]

    encodeBtn.addEventListener('click', function encodeMsg() {
        let messageToEncode = writeMessage.value;

        let encodedMsg = messageToEncode.split('')
            .map(letter =>
                letter = String.fromCharCode(letter.charCodeAt(0) + 1))
            .join('')
        writeMessage.value = ''

        receiveMessage.value = encodedMsg;


        decodeBtn.addEventListener('click', function show() {
            receiveMessage.value = encodedMsg.split('')
                .map(letter => letter = String.fromCharCode(letter.charCodeAt(0) - 1))
                .join('')
        })
    })
}