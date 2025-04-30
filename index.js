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
    let unencodedText = document.getElementById("unencodedText").value.toLowerCase()
    let cipherNumber = Number(document.getElementById("cipherSelector").value)
    let encodedMessage = ""

    if (typeof(cipherNumber) !== "number"){
        document.getElementById("cipherSelector").value = "Error"
        return
    }
    
    for (const char of unencodedText) {
        let charIndex = alphabet.indexOf(char)
        
        if (charIndex === -1){
            encodedMessage += char
            continue
        }
        
        let index
        if(decodeOn == false){
            index = charIndex + cipherNumber
        } else {
            index = charIndex - cipherNumber
        }
        
        while(index > 25){
            index = index - 26
        }
        
        while (index < 0){
            index = index + 26
        }
        
        const encodedChar = alphabet[index]
        encodedMessage = encodedMessage + encodedChar
    }
    document.getElementById("encodedText").value = encodedMessage
}

// function encode(text, number, decodeFlag = false) {
//     let unencodedText = text.toLowerCase()
//     let cipherNumber = number
//     let encodedMessage = ""
    
//     if (/*cipherNumber < 0 || */typeof(cipherNumber) !== "number"){
//         console.log(typeof(cipherNumber))
//         return "Error"
//     }

//     for (const char of unencodedText) {
//         let charIndex = alphabet.indexOf(char)
        
//         if (charIndex === -1){
//             encodedMessage += char
//             continue
//         }

//         let index
//         if(decodeFlag == false){
//             index = charIndex + cipherNumber
//         } else {
//             index = charIndex - cipherNumber
//         }

//         while(index > 25){
//             index = index - 26
//         }

//         while (index < 0){
//             index = index + 26
//         }

//         const encodedChar = alphabet[index]
//         encodedMessage = encodedMessage + encodedChar
//     }

//     return encodedMessage
// }

// console.log(encode("Hello, world!", 1))

// module.exports = encode