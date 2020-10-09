function calculateBMI(weight, height){
    
    // console.log('oke?', height, weight);
    
    const BMI = weight / (height * height);
    
    // console.log(BMI);

    return BMI;
}
function calculateBMR(weight, height, ageOfUser, genderOfUser){
    let BMR;

     if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * (height * 100)  - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * (height * 100) - 5 * ageOfUser - 150;
    }
return BMR;
}
function calculateIdealWeight(height){
    const idealWeight = 22.5 * height * height;
    return idealWeight;
}
function calculateDietWeeks(realWeight, idealWeight){
    // console.log('new function', realWeight, idealWeight )
let dietWeeks = (realWeight - idealWeight) / 0.5
// console.log(Math.abs(dietWeeks))
return Math.abs(dietWeeks)
}
function calculateDailyCalories(BMR, answer){
    // console.log('Yezzur', BMR, answer)
    let dailyCalories;
    dailyCalories = answer === 'yes' ? BMR * 1.6 : BMR * 1.4
    // console.log(dailyCalories)
return dailyCalories;
}
function calculateDietCalories(idealWeight, weight, dailyCalories){
    // console.log('de laatste!', idealWeight, weight)
    // let dietCalories;
    
    return idealWeight > weight ? dailyCalories + 500 : dailyCalories - 500;
    // if (idealWeight < weight){
    //     dietCalories = dailyCalories - 500;
    // }else{
    //     dietCalories = dailyCalories + 500;
    //     console.log(dietCalories)
}
function validateInputnumber(argv){
// console.log('Nog eens', argv)
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
}
function validateNumbers(weightInKg, heightInM, age){
// console.log('again')
if (isNaN(weightInKg)){
    console.log(
        'Pleas put in your weight in kilogram.'
    );
    process.exit();
}
if (isNaN(heightInM)){
    console.log(
        'Pleas put in your height in meters.'
    );
    process.exit();
}
if (isNaN(age)){
    console.log(
        'Please put in your age in years.'
    );
    process.exit();
}
if (age < 20){
    console.log(
        'Sorry you are to young to use the BMI calculator.'
    );
}
if (weightInKg < 30 || weightInKg > 300){
    console.log(
        'Please enter a weight between 30 and 300 kilo\'s or go see a doctor.'
    );
    process.exit();
}
}
function validateAnswers(gender, dailyExercise){
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
}
function formatOutput(userObject){
    return(`

BMI calculator

Age: ${userObject.age} years
Height: ${userObject.height} m
Weight: ${userObject.weight} kg

Your BMI is ${userObject.BMI}

A BMI under 18.5 is considered underweight
A BMI above 25 is considered overweight


You should eat ${userObject.dietCalories} calories a day.

If you want to reach your ideal weight of ${userObject.idealWeight} kg:

Eat ${userObject.dietCalories} calories a day
For ${userObject.dietWeeks} weeks

`)
}

function bmiCalculator(){
    validateInputnumber(process.argv);
    
    const weightInKg = Number(process.argv[2]);
    const heightInM = Number(process.argv[3]);
    const age = Number(process.argv[4]);
    const dailyExercise = (process.argv[5]);
    const gender = (process.argv[6]);

    validateNumbers(weightInKg, heightInM, age)
    validateAnswers(gender, dailyExercise)

    const BMI = calculateBMI(weightInKg, heightInM)
    const BMR = calculateBMR(weightInKg, heightInM, age, gender)
    const idealWeight = calculateIdealWeight(heightInM)
    const dietWeeks = calculateDietWeeks(weightInKg, idealWeight)
    const dailyCalories = calculateDailyCalories(BMR, gender)
    const dietCalories = calculateDietCalories(idealWeight, weightInKg, dailyCalories)

    

    const user = {
        weight: weightInKg,
        height: heightInM,
        age: age,
        dailyExercise: dailyExercise,
        gender: gender,
        BMI: BMI,
        idealWeight: idealWeight,
        dietWeeks: dietWeeks,
        dietCalories: dietCalories,
    }

    const output = formatOutput(user)

    console.log(output)
}
bmiCalculator()