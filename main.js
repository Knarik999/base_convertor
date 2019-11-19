const reader = require('readline-sync');
const {convertToHexa, convertToBinary} = require('./converter');

const num = reader.questionInt("Please enter the number you want to convert = ");
const opt = reader.questionInt("Please enter option: \n 1:Binary \n 2:Hexadecimal \n");

if(opt === 1){
  console.log(convertToBinary(num));
}else if(opt === 2){
  console.log(convertToHexa(num));
}else if(typeof opt === "number"){
  console.log("There is no options for that number! ");
}else{
  console.log("Imported value should be number");
}