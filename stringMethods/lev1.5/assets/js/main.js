const text = 'Susi is back from codingschool';
let string1 = text.substring(0, 4);
let string2 = text.substring(5, 7);
let string3 = text.substring(24);
let string4 = text.substring(0, 8) + text.substring(24);

document.write(`${string1} <br> ${string2} <br> ${string3} <br> ${string4}`);