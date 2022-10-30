const text = "Sam is good at codingschool";

let string1 = text.replace("good", "bad").replace("codingschool", "school");
console.log(string1);

let string2 = text.replace("Sam", "Susi").replace("coding", "");

let string3 = text.replace("codingschool", "tennis");



/* 
let string3 = text.replace("Sam is good at tennis"); */

document.write(`${string1} <br> ${string2} <br> ${string3}`);