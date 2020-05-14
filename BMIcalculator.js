
 const calculateBMI = function()//no need for parameters it knows where to get the information from
 {
 const height= document.getElementById('cm').value;
 console.log(height)
 const weight = document.getElementById('kg').value;
 console.log(weight)
 return weight / height**2 
 }


 function getBMIresult() {
   const BMI =calculateBMI();
   let result = 'Your BMI is';


  if (BMI < 18.5) {  
    result = `${result} ${BMI}, You are underweight`;
 } else if (BMI > 18.5 && BMI < 25){
    result = `${result} ${BMI}, You have a normal weight`;
} else if (BMI > 25 && BMI < 30){
    result = `${result} ${BMI}'You are overweight`;
 } else if ( BMI > 30) {
    result = `${result} ${BMI}'You are obese`;
 }
 
 document.querySelector('.BMIcategories').textContent=results
 // console.log(result) instead of above

 // const result = calculateBMI(weight, height);
// getBMIresult(result) same as bellow

getBMIresults(calculateBMI(weight, height));



