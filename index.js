const chars = ["A", "B", "C", "D", "E", "F", "G", "H",
"a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4", "5", "6", "7", "8",
"9", "!", "@", "#", "$", "%", "^", "&"]  //length is 32
let passwordLength = 8
let password1 = ""
let password2 = ""
let password3 = ""
let password4 = ""
let pass1 = document.getElementById("btn-password1")
let pass2 = document.getElementById("btn-password2")
let pass3 = document.getElementById("btn-password3")
let pass4 = document.getElementById("btn-password4")
let isGenerated = false;

function generateAllPasswords() {
    getFirstPassword()
    getSecondPassword()
    getThirdPassword()
    getFourthPassword() 
    isGenerated = true
}



function generateChar() {
    const randomIndex = Math.floor ( Math.random() * 32 )
    return chars[randomIndex]
}

function getFirstPassword() {  
        for (let i = 0; i < passwordLength; i++) {
        password1 += generateChar()
    }
        pass1.textContent = password1
        password1 = ""
}

function getSecondPassword() {  
        for (let i = 0; i < passwordLength; i++) {
        password2 += generateChar()
    }
        pass2.textContent = password2
        password2 = ""
}

function getThirdPassword() {  
        for (let i = 0; i < passwordLength; i++) {
        password3 += generateChar()
    }
        pass3.textContent = password3
        password3 = ""
}

function getFourthPassword() {  
        for (let i = 0; i < passwordLength; i++) {
        password4 += generateChar()
    }
        pass4.textContent = password4
        password4 = ""
        
}



// function generateAllPasswords() {
//     getFirstPassword()
//     getSecondPassword()
//     getThirdPassword()
//     getFourthPassword() 
// }

// generateAllPasswords()



// console.log( password )
// console.log(chars.length)