const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

let text1School = text1.replace("coding", "");

const first = text1School.concat(" " + text4 + " the movie theather");
console.log(first);

const sec = text1.replace("codingschool", "movie theater");
console.log(sec);

const third = text2.concat(" " + text4 + " " + text1School.replace("is", "are"));
console.log(third);

const fourth = text2.concat(" ", text4, " ", third.slice(9, 25), " ", " gym and the movie theater");
console.log(fourth);


let text4to = text4 + " to the";
const fifth = text2.concat(" ", text1School.slice(4), " ", text4to, "", fourth.slice(38));
console.log(fifth);

document.write(`${first} <br> ${sec} <br> ${third}  <br>  ${fourth} <br> ${fifth}`);