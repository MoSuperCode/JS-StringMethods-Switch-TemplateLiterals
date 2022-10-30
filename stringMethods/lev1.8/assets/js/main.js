const text = "Sam is going to codingschool";

let string1 = text.replace("coding", "").toUpperCase();
let string2 = text.replace("coding", "").toLowerCase();
let string3 = text.slice(0, 4).toUpperCase() + text.slice(4, 16) + text.slice(22).toUpperCase();
let string4 = text.slice(0, 4).toLowerCase() + text.slice(4, 16).toUpperCase() + text.slice(22).toLowerCase();
string50 = text.replace("coding", "").split(" ");
for (let i = 0; i < string50.length; i++) {
    string50[i] = string50[i][0].toUpperCase() + string50[i].substr(1);
}
string5 = string50.join(" ");



document.write(`${string1} <br> ${string2} <br> ${string3} <br> ${string4} <br> ${string5} <br> `);
