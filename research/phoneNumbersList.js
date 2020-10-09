const patients = require("./patients");


const phoneNumbersList = patients.map(function(card){
    

    return card.phoneNumber
})

console.log(phoneNumbersList)