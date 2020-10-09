const patients = require("./patients");


function calculateBMR(weight, height, ageOfUser, genderOfUser) {
    const heightInCm = height * 100;
  
    let BMR;
  
    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
  
    return BMR;
  }

bmrs = patients.map(function(card){
    bmr = calculateBMR(card.weight, card.height, card.age, card.gender)
    return bmr
})

console.log(bmrs)