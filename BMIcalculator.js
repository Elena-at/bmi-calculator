const height = 1.71
// prompt("Insert your height (cm):");
const weight = 60
// prompt("Insert your weight (kg)");

const BMI = weight/(height*height);


let result = "Your BMI " + BMI;

if (BMI < 18.5) {  
    result = `${result} ${BMI}, You are underweight`;
} else if (BMI > 18.5 && BMI < 25){
     result = `${result} ${BMI}, You have a normal weight`;
} else if (BMI > 25 && BMI < 30){
    result = `${result} ${BMI}, You are overweight`;
} else if ( BMI > 30) {
    result = `${result} ${BMI}, You are obese`;
}






