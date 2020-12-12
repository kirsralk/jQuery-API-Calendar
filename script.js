//Display date at the top of the page

    //Retrieve today's date from moment.js
var today = moment().format('LLLL');

    //Show formatted date on page load
function showDate() {
    $("#currentDay").text(today);    
    console.log(today);
};

$(window).on("load", showDate());

//Time block functionality

    //Retrieve current hour from moment.js
var currentHour = moment().format('hA');
var currentHour24 = moment().format('HH');

console.log("The current hour is: " + currentHour);
console.log("The current hour in 24hr time is: " + currentHour24);

function testTest() {
    if (currentHour24 == 14){console.log("true")};
};

testTest();

//for time blocks, if id=current hour, change class to present
//if id = past hour, change class to past
//if id = future hour, change class to future