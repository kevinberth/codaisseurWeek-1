const patients = require("./patients");
const ownInput = (process.argv[2]);


let specificPatient;


function lookingForNumber(patientCard){
    // console.log(patientCard.phoneNumber, phoneNumber)
    if(ownInput === patientCard.phoneNumber){
        return true
    }
    else{
        return false
    }
    // if(phoneNumber === )
    


}






specificPatient = patients.find(lookingForNumber)

console.log(specificPatient)