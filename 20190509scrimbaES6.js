const firstName = "Eliot";
const lastName = "Sanford";

let fullName = `${firstName} ${lastName}`;
let lastCommaFirst = `${lastName} ${firstName}`;
console.log(fullName);
document.getElementById('insert-here').innerText = fullName;
document.getElementsByClassName('insert-name').innerText = lastCommaFirst;