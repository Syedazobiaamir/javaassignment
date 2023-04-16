// // problem no.2

//  Generate a random number between 1 and 10
var secretNumber = 6;
//  Ask the user to enter a guess
var userGuess = prompt("guess the secret no. (between 1 and 10):");
// Check if the guess is correct
if(userGuess == secretNumber){
    alert("congratulation");
}else if(userGuess>secretNumber || userGuess<secretNumber) {
        alert("guess again");
}
// problem No. 4

var familyMembers = prompt("ENTER TOTAL NO. OF FAMILY MEMBER");
var fitraMethod = prompt("PLEASE CHOOSE FITRA METHOD 1.Barley (450RS per person) 2.wheat (250 RS per person) 3. dates(2100Rs per person");
var perPerson =0;
if(fitraMethod == 1){
    perPerson = 450;
}else if(fitraMethod ==2){
    perPerson = 250;
}else if( fitraMethod ==3){
    perPerson = 2100;
} else("please choose correct method");

var fitrahAmount = perPerson * familyMembers;
alert("the fitra amount of" + familyMembers  + "family members using the selected method is RS" + fitrahAmount);



problem No.5
var zakatPercentage = 0.0254;
var userInput = Number( prompt("Enter a number"));
var result = (zakatPercentage) * (userInput);
alert ("Your zakat value is " + result)


// problem No.5


var products = ["Mango", "Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Peach"];


var userInput = parseInt(prompt(`Enter the position of the item you want to remove (1 - ${products.length}):`));

var removedItem = products.splice(userInput - 1, 1);

console.log(`The removed item is: ${removedItem}`);
alert(`The removed item is: ${removedItem}`);

console.log(`The remaining items in the array are: ${products}`);
alert(`The remaining items in the array are: ${products}`);

console.log(`Total number of items remaining: ${products.length}`);
alert(`Total number of items remaining: ${products.length}`);


// problem No. 6


var nationality = prompt("Write down your nationality");
var age = parseInt(prompt("Your age please"));
var gender = prompt("Your Gender please");

if( nationality === 'Pakistani' || nationality === 'Indian'){
    console.log("You are eligible to vote");

    if( age>= 18 && gender === 'male'){
        console.logs("You are eligible to vote");
    }
    else if( age>= 18 && gender === 'female' ){
        console.log("You are eligible to vote");
    }
}
else{
    console.log("You are not eligible to vote");


problem No.7
var WorldCupSquad =["Player1", "Player01", "Player02", "Player03", "Player04", "Player05", "Player06", "Player07", "Player08", "Player09", "Player10", "Player12", "Player13", "Player14", "Player15"]
var teamPlayer= WorldCupSquad.slice(1,12);
console.log (teamPlayer)