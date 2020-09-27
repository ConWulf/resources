var movies = ["The Little Mermaid", "Brother", "Hercules"];
var days = []
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
}