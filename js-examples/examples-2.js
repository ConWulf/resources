/*var days = []
for (var i = 0; i < movies.length; i++) {
    var askDaysRented = prompt("How many days would you like to rent " + movies[i]);
    while ((isNaN(parseInt(askDaysRented)) || askDaysRented === "") && askDaysRented !== null) {
        alert("Please enter a number")
        askDaysRented = prompt("How many days would you like to rent " + movies[i]);
    }
    while (askDaysRented === "0") {
        alert("Please enter a number greater than 0");
        askDaysRented = prompt("How many days would you like to rent " + movies[i]);
    }
    if (askDaysRented === null) {
        continue;
    } else {
        var daysRented = days.push(askDaysRented);
    }
}

  if (!isNaN(askDaysRented)) {
    var startDays = 0
    for (var j = days.length - 1; j >= 0; j--) {
       startDays += parseInt(days[i]);
      var totalDaysRented = startDays;
    }
    alert("your total cost is " + (totalDaysRented * 3).toFixed(2));
}*/
// var mary = ["mary", "had", "a", "little", "lamb", "little", "lamb", "little", "lamb"];

// function getUniqueValues(arr) {
//     var uniqueValues = [];
//     for (var i=0; i<arr.length ; i++)
//         if (uniqueValues.indexOf(arr[i]) === -1)
//             uniqueValues.push(arr[i]);
//     return uniqueValues;
// }
// console.log(unique(mary));
// function getUniqueValues (arr) {
//   var sorted = mary.sort();
//    var empty = [];
// for (var i = 0; i < sorted.length; i++) {
//   if (sorted[i] !== sorted[i+1]) {
//     empty.push(sorted[i]);
//    }
// }
 
//  }
// console.log(getUniqueValues(mary)); 

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

// function isOdd(num) {
//     if (num % 2 == 0) {
//       return false;
//     }
//   return num % 2 !== 0;
// }

// console.log(array.filter(isOdd)); // [2, 3, 5, 7, 11, 13]

var s =["kiwi", "mango", "strawberry"];
function longest(arr) {
 
for (var i = 0; i < s.length; i++) {
        if(s[i-1] > arr) {
            return arr;
        }
}
}

s.filter(longest);

