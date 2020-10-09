const patients = require("./patients");
const age = parseInt(process.argv[2]);

// patient.age > age will already resolve to true or false
// so we don't need to use an if statement

const patientsOlderThan = patients.filter(function(patient) {
  return patient.age > age;
});

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);