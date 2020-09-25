//exercise 1
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

//exercise 2
/*Write some JavaScript code, that is, variables and operators, to describe the following 
scenarios. Do not worry about the real operations to get the values, the goal of these exercises 
is to understand how real world conditions can be represented with code.*/
//1
/*const price = 3;
var Tlm = 3;
var brotherBear = 5;
var hercules = 1;
var totalDaysRented = Tlm + brotherBear + hercules;  
var totalPrice = price * totalDaysRented;
console.log(totalPrice);*/


//2
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
/*var currentClassSize = x;
var maxClassSize = y;
var classOpen = x < y;
var noConflicts = true;


if(classOpen === true && noConflicts == true) {
	enroll;
} else {
	not enrolled;
}
*/



//4
/*var itemsBought = x;
var offer = true;
var isPremiumMember = true;
if (offer === true && itemsBought > 2 && isPremiumMember === false) {
	apply offer;
} else if (offer === true && isPremiumMember === true) {
	apply offer;
} else {
	reject offer;
}*/

var username = 'codeup';
var password = 'notastrcodeupongpassword';
var minPasswordLength = password > 5;
var checkPassword = password !== password.substring(username);
var maxUsernameLength = username < 20;
var whiteSpace = (password.trim() === password && username.trim() === username);

console.log(checkPassword);
