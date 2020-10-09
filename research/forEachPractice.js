const patients = require("./patients");

// declare function
function displayFullName(patiento) {
  // HERE IS HOW TO CHECK YOURSELF
//   console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patiento;

  const fullName = `${firstName} ${lastName}`;

 console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);



// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

 console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight
// - for each patient, log their last name and gender
// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName


patients.forEach(function(patient) {
const {weight} = patient
    console.log('check', weight)
})
patients.forEach(function(nameGender){
    const {gender, firstName} = nameGender
    const outputNameGender = firstName + ' ' + gender
    console.log(outputNameGender)
})

patients.forEach(function(beingFancy){
    const {lastName, gender} = beingFancy
    if (gender === 'm') {
        console.log('Mr. ',lastName)
    }
    else{
        console.log('Mrs. ',lastName)
    }
})