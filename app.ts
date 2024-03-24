// Question 28
let age : number = 30
if (age < 2){
    console.log("The person is a Baby");
}
else if (age < 4){
    console.log("The person is a Toodler");
}
else if (age < 13){
    console.log("The person is a Kid");
}
else if (age < 20){
    console.log("The person is a Teenager");
}
else if (age < 65){
    console.log("The person is an Adult");
}
else{
    console.log("The person is an Elder");
}

// Question 29
let favorite_fruits : string[] = ["Mango", "Apple", "Grapes"];
if(favorite_fruits.includes("Apple")){
    console.log("You really like Apple!");
}
if(favorite_fruits.includes("Mango")){
    console.log("You really like Mango!");
}
if(favorite_fruits.includes("Grapes")){
    console.log("You really like Grapes!");
}

// Question 30
let usernames : string[] = ["Admin", "user1", "user2", "user3"];
usernames.forEach(username => {
    if (username === "Admin"){
        console.log(`Hello Admin, would you like to see a status report?`);
    } else{
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});