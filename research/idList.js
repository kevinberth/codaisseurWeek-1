const patients = require("./patients");

const idList = patients.map(function(card){
    idCardList = card.id
    return idCardList
})

console.log(idList)