// patientsWeighingLessThan.js
const patients = require("./patients");
const weight = 75;

console.log(patients);

const patientsWeighingLessThan = patients.filter(function(myWeight){
    patients.weight > 
}); // your logic here using filter

console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);