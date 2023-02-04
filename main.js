//  var a = 20
//  var b = 10

// console.log(a)
// console.log(b)
// let hello = 'Hello world!';

// let message;

// // copy 'Hello world' from hello into message
// message = hello;

// // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world
// let isGreater = 4 > 1;

// alert( isGreater ); // true (the comparison result is "yes")
// let ism = "sulaymon"
// let age = 22

// alert( `salom ${ism}` ); // ?

// prompt( `${ism} ${age} yoshda` ); // ?

// alert( `hello ${name}` ); // ?
// open console to see
// for (let i = 1; i < 81; i++) {
//     console.log("value,", i);
//   }
//   let age = prompt ("how old are you ?" , 22)
//   alert ('you are ${age} years old!')
// alert ("welcome")
// let ism = prompt("ismingizni kiriting");
// let yosh = prompt("yoshingizni kiriting");
// let ish = prompt("kasbingizni kiriting");

// console.log(`
// User info:
// name: ${ism} 
// age: ${age} 
// jobx: ${ish} 
// `)
// let erkak = prompt("Jinsingizni kiriting");
// let ayol = prompt("Jinsingizni kiriting");
//  let erkak2 = "Siz o'g'il bolasiz";
// let ayol2 = "Siz qiz bolasiz";
// let yosh = prompt("Yoshingizni kiriting");
//  if ( yosh <= 18 && erkak == erkak2 ){
//    console.log('siz yosh ogil bolasiz oqishingiz kerak')
//  }
//  else if ( yosh > 18 && erkak == erkak2){
//    console.log("siz ogil bolasiz ishlasangiz boladi")
//  }
//  else if ( yosh <= 16 && ayol2 == women){
//    console.log("Siz yosh qiz bolasiz oqishingiz kerak")

//  } else if ( yosh > 16 && ayol2 == women){
//    console.log('siz katta qizsiz ishlasangiz boladi')
//   }
let oneDollar = 11191.00;
let oneEuro = 11747.42;

let flyInDollar = 500;
let hotelInDollar = 250;
let enjoyInEuro = 120;

let expensesInDollar = (flyInDollar + hotelInDollar ) + oneDollar;
let expensesInEuro = enjoyInEuro + oneEuro;
let allExpensesInSum = expensesInDollar + allExpensesInSum;

console.log(allExpensesInSum);

let userMoney = prompt("Enter your Money");

if (userMoney >= allExpensesInSum){
   console.log("Oq yo'l")
}
else {
   console.log("Pul kam ekan.");
}