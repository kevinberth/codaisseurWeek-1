

const patients = require("./patients");

const firstPatient = patients[0];


const {weight, height, age, firstName, lastName} = firstPatient

// const weight = firstPatient.weight
// const height = firstPatient.height
// const age = firstPatient.age

const fullName = firstName + ' ' + lastName

console.log(fullName, weight, height, age)

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log:
