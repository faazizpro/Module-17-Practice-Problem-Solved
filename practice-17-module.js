//=========================//=========================//=========================
//প্রাকটিস চ্যালেঞ্জ-1: 
//=========================//=========================//=========================
// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of 'Banana' and replace 'Banana' with 'Mango'
// b) Remove Orange and add watermelom

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana'));
console.log(fruits);

fruits[1]= 'Mango'
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
//=========================//=========================//=========================


//=========================//=========================//=========================
//প্রাকটিস চ্যালেঞ্জ-2: 
//=========================//=========================//=========================


// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
// ২) যারা ৫০ বা তার উপরে পেয়েছে, তাদের grade D.
// ৩) যারা ৬০ বা তার উপরে পেয়েছে, তাদের grade C.
// ৪) যারা ৭০ বা তার উপরে পেয়েছে, তাদের grade B.
// ৫) যারা ৮০ বা তার উপরে পেয়েছে, তাদের grade A.
// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.

var fahad = 85;
var mahim = 72;
var foysal = 56;
var pavel = 43;

if (fahad >= 90){
    console.log('Fahad Got A+');
}
else if(fahad >= 80) {
    console.log('Fahad Got A');
}
else if(fahad >= 70){
    console.log('Fahad Got B');
}
else if (fahad >= 60){
    console.log('Fahad Got C');
}
else if ( fahad >= 50){
    console.log('fahad Got D');
}
else{
    console.log('Fahad Got F');
}


if (mahim >= 90){
    console.log('mahim Got A+');
}
else if(mahim >= 80) {
    console.log('mahim Got A');
}
else if(mahim >= 70){
    console.log('mahim Got B');
}
else if (mahim >= 60){
    console.log('mahim Got C');
}
else if ( mahim >= 50){
    console.log('mahim Got D');
}
else{
    console.log('Fahad Got F');
}
// Is it Necessary to use else after else if or if?
//=========================//=========================//=========================


//=========================//=========================//=========================
//প্রাকটিস চ্যালেঞ্জ-3: 
//=========================//=========================//=========================

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal
//=========================//=========================//=========================

var num1 = 13;
var num2 = 45;
var num3 = 45;

if (num1 > num2 && num1 > num3){
    console.log('num1 is the largest number');
}
else if(num2 > num1 && num2 > num3){
    console.log('num2 is the largest number');
}
else if(num3 > num1 && num3 > num2){
    console.log('num3 is the largest number');
}
else{
    console.log('All Numbers Are Equal Or Any Two Numbers Are Equal');
}


// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

var a = 9;
var b = 8; 
var c = 9;

if( a == b || b == c || c == a){
    console.log('This is isosceles');
}
else{
    console.log('This is not isosceles');
}