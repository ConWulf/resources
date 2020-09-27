//exercise 2
//Execute the following statement in the Chrome JavaScript 
//console and then follow the directions below.


/*var sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toUpperCase());
sample  += " Students";
console.log(sample);
console.log(sample.replace("Students", " Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));*/

//exercise 3
/*Write some JavaScript code, that is, variables and operators, to describe the following 
scenarios. Do not worry about the real operations to get the values, the goal of these exercises 
is to understand how real world conditions can be represented with code.*/

//1
//You have rented some movies for your kids: 
//The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't 
//know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
/*const price = 3;
var Tlm = 3;
var brotherBear = 5;
var hercules = 1;
var totalDaysRented = Tlm + brotherBear + hercules;  
var totalPrice = price * totalDaysRented;
console.log(totalPrice);*/


//2
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a 
//different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you 
//receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
/*var googlePay = 400;
var googleHours = 6;
var googleTotalPay = googlePay * googleHours;
var amazonPay = 380;
var amazonHours = 4;
var amazonTotalPay = amazonPay * amazonHours;
var facebookPay = 350;
var facebookHours = 10;
var facebookTotalPay = facebookPay * facebookHours;
var totalWeeklyPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
console.log(totalWeeklyPay);*/

//3
//A student can be enrolled in a class only if the class is not full
//and the class schedule does not conflict with her current schedule.

/*var currentClassSize = 12;
var maxClassSize = 30;
var classFull = currentClassSize >= maxClassSize;
var noConflicts = true;
var canEnroll = !classFull && noConflicts;
*/



//4
//A product offer can be applied only if a person buys more than 2 items, 
//and the offer has not expired. Premium members do not need to buy a specific amount of products.

/*var itemsBought = x;
var didByTwo = x > 2
var offerExpDate = "date"
var today = "currentDate"
var offerExpired = today > offerExpDate;
var isPremiumMember = true;
if (offer  && didByTwo && isPremiumMember) {
	offer = true;
} else if (offer && isPremiumMember) {
	offer = true;
} else {
	offe = false;
}*/

//exercise 4
//Use the following code to follow the instructions below:
//Create a variable that holds a boolean value for each of the following conditions:

/*var username = 'codeup';
var password = 'notastrongpassword';
var minPasswordLength = password >= 5;
var excludesUsername = password.indexOf(username) === -1;
var maxUsernameLength = username <= 20;
var WhiteSpace = (password.trim() !== password || username.trim() !== username);*/


//var favoriteAnimal = prompt("what is your favorite animal?");
//console.log("your favorite animal is " + favoriteAnimal);
