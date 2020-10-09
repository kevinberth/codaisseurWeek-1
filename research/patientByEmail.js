
const patients = require("./patients");
const email = (process.argv[2]);


let specificPatient; 

function findUserByEmail(patientCard){
// console.log('hello from the function', patientCard, patients.email, email)
// console.log('looking for email.', patientCard.email)
    if (patientCard.email === email){
        return true
    }
    else{
        return false
    }
}


specificPatient = patients.find(findUserByEmail)
console.log(specificPatient);


// // patientByEmail.js
// const patients = require("./patients");
// const email = "radolthineg@mayoclinic.com";

// // console.log(patients);

// let specificPatient = find(function(){
//     email === patients.email
// }) // your logic here

// console.log(specificPatient);