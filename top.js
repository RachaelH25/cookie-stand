let user;

function yourName() {
    user= prompt("Hi, What is your name?");
    return document.write("Hi " + user);
}

function guessANumber(){
    let answer;

    while(answer !=7){
        answer= prompt("Guess a number between 1 and 10")

        if(answer != 7){
            alert("Try Again")
        }else {
            alert("Congratulations, you are correct!")
        }
    }
}

guessANumber();

function timeOfDay() {
    let time = prompt("Hi " + user + ", what hour is it? (0-23)");

    let message;

    if(time < 12){
        message = "Good morning, " + user
    } else if(time <= 18){
        message = "Good Afternoon, " + user
    }else if(time < 24){
        message = "Good Evening,  " + user
    }else{
        message= "Sorry " + user + ", that hour does not exist."
    }
    console.log(message);
    return message;
}

function displayRating(){
    let output= "";
    let rating= prompt("Rate our cookies on a scale of 1-5. How many stars?")
    
    for(let i = 0; i < rating; i ++){
        output += "<img class=stars src= 'images/star 2.png' alt= 'rating star'>";
    }
    return document.write(output);
}

function japanese(){
    let japan= confirm("I am learning Japanese, do you know any Japanese " + user + "?");
    let message;
    
    if (japan === true) {
        message = "こんにちは " + user + "-san. いらっしゃいませ！"
        console.log();
    } else {
        message = "しょうがないなぁ。Welcome, " + user + ". クッキー is Cookie written in Japanese." 
        console.log();
    }
    console.log(message);
    return message;
    }