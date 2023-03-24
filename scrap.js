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