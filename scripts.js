//let myName= "Rachael";
//console.log (myName)

//let myAge= "27";
//console.log (myAge)

//const nameAge= "Hello, my name is " + myName + " and I am " + myAge + " years old."
//console.log (nameAge)

//let x= 5
//const y= "5"
//let number= x + y;
//console.log (typeof number);

const demo= document.getElementById("demo");
//console.log(demo);
demo.innerHTML= message;

let japan= confirm("I am learning Japanese, do you know any Japanese " + user + "?");

if (japan === true) {
    message = "こんにちは " + user + "-san. いらっしゃいませ！"
    //console.log();
} else {
    message = "しょうがないなぁ。Welcome, " + user + ". クッキー is Cookie written in Japanese." 
    //console.log();
}

console.log(message);

document.getElementById("japan").innerHTML = message;