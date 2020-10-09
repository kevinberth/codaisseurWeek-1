// we declare an array of strings
const names = ["David", "Rein", "Jeroen"];

// we declare a function that takes a name
function greet(name) {
  console.log(`Hi ${name}`);
}

// we use the forEach method to tell javascript
// we pass the greet function to forEach as an argument:
// execute the greet function for every element of the array
names.forEach(greet);

// Output:
// Hi David
// Hi Rein
// Hi Jeroen