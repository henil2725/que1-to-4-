 
 //q1
 pi =3.14;
 radius = 7;
let area = 3.14 *radius**2;
console.log("the area of circle is :" + area);


//q2

let a = 10;
let b = 20;
let c = 5;

console.log  ((a * b) / c + (b - a));
 
//q3

let x = 5;
let y = 10;

 x += 2;
 y *= x;
 console.log(" letest value of x ",x);
 console.log(" letest value of y ",y);


//q4

let num = 2;

num += 15;
num -= 5;
num *= 3;
num /= 2;
console.log("answer",num);

//q5

let score1 = 85;
let score2 = 90;
let result1 = score1 > 80 && score2 > 80;
console.log("score1 and score2 are greater than 80 :",result1);

//q6

let fruit1 = "apple";
let fruit2 = "banana";

let fruit = fruit1 < fruit2;
console.log(" apple less than banana : ",fruit);


//q7

let age = 25;
let hasDrivingLicense = true;
if(age >= 18 && hasDrivingLicense){
    console.log("eligible for drive");
}else{
    console.log("not eligible for drive");
}

//q8
//query


//q9
let string = 123.45;
let result2 = Number(string) + 10;
console.log(result2);


//q10

let booleanValue = true ;
let result3 = booleanValue + " is this value";
console.log(result3);

//q11


//q13

let number = 9;
if(number > 10){
    console.log("this is postive number");
}
else if(number >8){
    console.log("this is nagative number");
}

//q14

let temperature = 30;
if (temperature > 25){
    console.log("it's the hot day");
}
else if(temperature > 30){
    console.log("it's the cool day")
}

//q15
let num1 = 8 ;

if(num1 > 0){
    console.log("positive");
}
else if(num1 < 8){
    console.log("negative");
}

//q16
let marks = 75;
if(marks >= 90){
    console.log("A grade");
}
else if(marks >= 80 && marks < 89){
    console.log("B grade");
}
else if(marks >= 70 && marks < 79){
    console.log("C grade");
}
else if(marks >= 60 && marks < 69){
    console.log("D grade");
}


//q17
let number1 = 15;
let number2 = 20;
if(number1 > number2){
    console.log("number1 is greater than number2");
}
else if(number1 < number2){
    console.log("number1 is less than number2");
}
else{
    console.log("number1 is equal to number2");
}
//q18