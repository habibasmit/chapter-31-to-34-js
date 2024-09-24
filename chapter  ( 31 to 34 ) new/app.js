// chapter 31 to 34 
// DATE METHODS

// question no 01 : Write a program that displays current date and time in your browser.
// var currentDate = new Date();
// console.log(currentDate);

// question no 2 : Write a program that alerts the current month in words. For example December.
// function showCurrentMonth() {
//   var now = new Date();
//   var monthNames = [
//       "January", "February", "March", "April", "May", "June", 
//       "July", "August", "September", "October", "November", "December"
//   ];
//   var currentMonth = monthNames[now.getMonth()];
//   alert("Current month: " + currentMonth);
// }
// showCurrentMonth();

//question no 03 : Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var day = new Date().toString().slice(0, 3);
// alert("Today is : " + day);

// question no 04 : Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var day = new Date().getDay(); 

// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// }else {
//     alert("Not a Fun day");
// }

// question no 05 : Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var date = new Date().getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// question no 06 : Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var currentDate = new Date(); 
// var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));
// alert("Minutes since Jan. 1, 1970: " + minutesSince1970); 

// question no 07 : Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var hours = new Date().getHours();
// if (hours < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }

// question no 08 : Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date(2020, 11, 31); 
// alert("Later Date: " + laterDate);

// question no 09 : Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
// var ramadanStartDate = new Date(2015, 5, 18);
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Days since 1st Ramadan: " + daysPast);

// questio no 10 : Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var referenceDate = new Date(2015, 0, 1); 
// var currentDate = new Date(); 
// var timeDifference = currentDate - referenceDate; 
// var secondsElapsed = Math.floor(timeDifference / 1000); 
// console.log("On reference date : "+ currentDate + "," + secondsElapsed+ " seconds had passed since beginning of 2015");


// question no 11 : Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var currentDate = new Date();
// var hours = currentDate.getHours();
// currentDate.setHours(hours + 1);
// console.log(currentDate);

// question no 12 : Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var currentDate = new Date(); 
// currentDate.setFullYear(currentDate.getFullYear() - 100); 
// alert(currentDate);


// question no 13 : Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var age = prompt("Please enter your age:"); 
// var currentYear = new Date().getFullYear(); 
// var birthYear = currentYear - age; 
// alert("Your age is : " + age + "\nYour birth year is : " + birthYear);


// question no 14 : Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a) Customer Name b) Current Month c. Number of units d) Charges per unit e) Net Amount Payable (within Due Date) f) Late Payment Surcharge g) Gross Amount Payable (after Due Date) Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// var customerName = "Habiba Kaleem";
// var today = new Date();
// var month = today.getMonth();
// var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var noUnits = 410;
// var chargePerUnit = 17;
// var netAmount = noUnits * chargePerUnit;
// var lateCharge = 150;
// var afterDueDate = netAmount + lateCharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + '<br>');
// document.write("Month: " + mlist[month] + "<br>");
// document.write("Number of Units: " + noUnits + "<br>");
// document.write("Charges per Unit: " + chargePerUnit + "<br><br>");
// document.write("Net Amount Payable (Within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateCharge + "<br>");
// document.write("Gross Amount Payable (After Due Date): " + afterDueDate + "<br>");
