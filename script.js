//Display date at the top of the page

    //Retrieve today's date from moment.js
var today = moment().format('LLLL');

    //Show formatted date on page load
function showDate() {
    $("#currentDay").text(today);    
    console.log(today);
};

$(window).on("load", showDate());
// $(window).on("load", blockColor());
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
blockColor();

//for time blocks, if id=current hour, change class to present
//if id = past hour, change class to past
//if id = future hour, change class to future

function blockColor(){
    console.log("this function is working");
    
    // If it's before 9am, all time blocks in the future
    if (currentHour24 < 9) {
        console.log("it's currently before 9am");
        $(".time-block").removeClass("past");
        $(".time-block").addClass("future");

    // Else if statements for 8 hours of workday
    } else if (currentHour24 == 9) {
        $("#9am").removeClass("past");
        $("#9am").addClass("present");
    }

    else if (currentHour24 == 10) {
        $("#10am").removeClass("past");
        $("#10am").addClass("present");
    }

    else if (currentHour24 == 11) {
        $("#11am").removeClass("past");
        $("#11am").addClass("present");
    }

    else if (currentHour24 == 12) {
        $("#12pm").removeClass("past");
        $("#12pm").addClass("present");
    }

    else if (currentHour24 == 13) {
        $("#1pm").removeClass("past");
        $("#1pm").addClass("present");
    }

    else if (currentHour24 == 14) {
        $("#2pm").removeClass("past");
        $("#2pm").addClass("present");
    }

    else if (currentHour24 == 15) {
        $("#3pm").removeClass("past");
        $("#3pm").addClass("present");
    }

    else if (currentHour24 == 16) {
        $("#4pm").removeClass("past");
        $("#4pm").addClass("present");
    }

    else if (currentHour24 == 17) {
        $("#5pm").removeClass("past");
        $("#5pmm").addClass("present");
    }

    // $("#15").toggleClass("present");
};
