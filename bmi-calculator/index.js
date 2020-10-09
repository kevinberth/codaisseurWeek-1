if (process.argv.length !== 7){
    console.log(`
    You gave ${process.argv.length - 2} arguments(s) to the program

    Please provide 5 arguments for
    
    weight (kg), 
    height (m), 
    age (years), 
    wether you exercise daily (yes or no)
    and your gender (m or f)
    
    `);
    process.exit();
}




var weightInKg = Number(process.argv[2]);
var heightInM = Number(process.argv[3]);
var age = Number(process.argv[4]);
var dailyExercise = (process.argv[5]);
var gender = (process.argv[6]);

var BMI = weightInKg / (heightInM * heightInM);

var idealWeightKg = 22.5 * heightInM * heightInM;

var heightInCm = heightInM * 100;
var BMR
BMR = gender === 'm' ? 10 * weightInKg + 6.25 * heightInCm - 5 * age + 50 : 10 * weightInKg + 6.25 * heightInCm - 5 * age - 150;

var dailyCalories;

dailyCalories = dailyExercise === 'yes' ? BMR * 1.4 : BMR * 1.6;

var weightToLoseKg = weightInKg - idealWeightKg;

var dietWeeks = weightToLoseKg / 0.5;

var dietCalories

if (idealWeightKg < weightInKg){
    dietCalories = dailyCalories - 500;
}else{
    dietCalories = dailyCalories + 500;
}

// if (isNaN(weightInKg)){
//     console.log(
//         'Pleas put in your weight in kilogram.'
//     );
//     process.exit();
// }
// if (isNaN(heightInM)){
//     console.log(
//         'Pleas put in your height in meters.'
//     );
//     process.exit();
// }
// if (isNaN(age)){
//     console.log(
//         'Please put in your age in years.'
//     );
//     process.exit();
// }
// if (age < 20){
//     console.log(
//         'Sorry you are to young to use the BMI calculator.'
//     );
}

if (dailyExercise !== 'yes' && dailyExercise !== 'no'){
    console.log(`
    Please answer if you exercise with yes or no.
    You entered ${dailyExercise}
    `);
    process.exit();
}
if (gender !== 'm' && gender !== 'f'){
    console.log(
        'Please state your gender with m of f.'
    );
    process.exit();
}
// if (weightInKg < 30 || weightInKg > 300){
//     console.log(
//         'Please enter a weight between 30 and 300 kilo\'s or go see a doctor.'
//     );
//     process.exit();
// }

console.log(`

BMI calculator

Age: ${age} years
Height: ${heightInM} m
Weight: ${weightInKg} kg

Your BMI is ${BMI.toFixed(1)}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight

Your ideal weight is ${idealWeightKg.toFixed()}
You can eat ${dailyCalories.toFixed()} calories a day.

If you want to reach your ideal weight of ${idealWeightKg.toFixed()} kg:

Eat ${dietCalories.toFixed()} calories a day
For ${Math.abs(dietWeeks).toFixed()} weeks

`);