let user= prompt("Hi my name is Rachael, what is your name?")

console.log("Hi "+ user)

let time= prompt("Hi "+ user + ", What hour is it? (0-23)");

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




