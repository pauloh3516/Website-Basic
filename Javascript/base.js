
var name= prompt("Hello, what is your name?");
var firstChar= name.slice(0,1);
var upperCaseFirstChar= firstChar.toUpperCase();
var restofname= name.slice(1, name.length);
alert("Hello " + upperCaseFirstChar + restofname + " welcome to my website");

document.querySelector("h1").innerHTML="<h1>Pop Up</h1>";

document.querySelector("button").classList.toggle("invisible");
document.querySelector("h1").innerHTML=("<em>Hello<em>");
