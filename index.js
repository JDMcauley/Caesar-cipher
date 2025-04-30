const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let decodeOn = false
const decodeToggle = document.getElementById("decodeToggle")

decodeToggle.addEventListener("click", function (e) {
    if (decodeOn == false){
        decodeOn = true
    } else if (decodeOn == true) {
        decodeOn = false
    }
    console.log(decodeOn)
})

function encode() {
    let unencodedText = document.getElementById("unencodedText").value
    let encodedMessage = ""
    
    for (const char of unencodedText) {
        let cipherNumber = document.getElementById("cipherSelector").value
        let index = alphabet.indexOf(char) + Number(cipherNumber)
        let encodedChar = alphabet[index]
        encodedMessage = encodedMessage + encodedChar
    }

    document.getElementById("encodedText").value = encodedMessage
}