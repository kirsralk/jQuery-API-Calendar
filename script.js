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
var currentHour24 = moment().format('HH');
// var currentHour24 = 0;

console.log("The current hour in 24hr time is: " + currentHour24);

function testTest() {
    if (currentHour24 == 17){console.log("true")};
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

    // Else if statements for 8 hours of workday
    } else if (currentHour24 == 9) {
        $("#9am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 10) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 11) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 12) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 13) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 14) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 15) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 16) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("past");
        $("#4pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 17) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("past");
        $("#4pm").removeClass("future").addClass("past");
        $("#5pm").removeClass("future").addClass("present");
    }
    // All blocks past if after 6pm
    else if (currentHour24 > 17) {
        console.log("it's currently after 5pm");
        $(".time-block").removeClass("future");
        $(".time-block").addClass("past");
    }
  };

  // Event listeners for save buttons to store inputs:

  // Variables to save input text and corresponding button clicks
  var saveBtn9 = $("#btn9");
  var saveBtn10 = $("#btn10");
  var saveBtn11 = $("#btn11");
  var saveBtn12 = $("#btn12");
  var saveBtn13 = $("#btn13");
  var saveBtn14 = $("#btn14");
  var saveBtn15 = $("#btn15");
  var saveBtn16= $("#btn16");
  var saveBtn17 = $("#btn17");

  var userInput9 = $("#9AMinput");
  var userInput10 = $("#10AMinput");
  var userInput11 = $("#11AMinput");
  var userInput12 = $("#12PMinput");
  var userInput13 = $("#1PMinput");
  var userInput14 = $("#2PMinput");
  var userInput15 = $("#3PMinput");
  var userInput16 = $("#4PMinput");
  var userInput17 = $("#5PMinput");

// Button events saving to local storage  
$(saveBtn9).on("click", function (e){
    e.preventDefault();
    var userInput9 = $("#9AMinput").val().trim();
    localStorage.setItem("9amHour",(userInput9));
});
    var savedInput1 = (localStorage.getItem("9amHour"));
    userInput9.val(savedInput1);

$(saveBtn10).on("click", function (e){
    e.preventDefault();
    var userInput10 = $("#10AMinput").val().trim();
    localStorage.setItem("10amHour",(userInput10));
});
    var savedInput2 = (localStorage.getItem("10amHour"));
    userInput10.val(savedInput2);

$(saveBtn11).on("click", function (e){
    e.preventDefault();
    var userInput11 = $("#11AMinput").val().trim();
    localStorage.setItem("11amHour",(userInput11));
});
    var savedInput3 = (localStorage.getItem("11amHour"));
    userInput11.val(savedInput3);

$(saveBtn12).on("click", function (e){
    e.preventDefault();
    var userInput12 = $("#12PMinput").val().trim();
    localStorage.setItem("12pmHour",(userInput12));
});
    var savedInput4 = (localStorage.getItem("12pmHour"));
    userInput12.val(savedInput4);    

$(saveBtn13).on("click", function (e){
    e.preventDefault();
    var userInput13 = $("#1PMinput").val().trim();
    localStorage.setItem("1pmHour",(userInput13));
});
    var savedInput5 = (localStorage.getItem("1pmHour"));
    userInput13.val(savedInput5);  

$(saveBtn14).on("click", function (e){
    e.preventDefault();
    var userInput14 = $("#2PMinput").val().trim();
    localStorage.setItem("2pmHour",(userInput14));
});
    var savedInput6 = (localStorage.getItem("2pmHour"));
    userInput14.val(savedInput6);  

$(saveBtn15).on("click", function (e){
    e.preventDefault();
    var userInput15 = $("#3PMinput").val().trim();
    localStorage.setItem("3pmHour",(userInput15));
});
    var savedInput7 = (localStorage.getItem("3pmHour"));
    userInput15.val(savedInput7);  

$(saveBtn16).on("click", function (e){
    e.preventDefault();
    var userInput16 = $("#4PMinput").val().trim();
    localStorage.setItem("4pmHour",(userInput16));
});
    var savedInput8 = (localStorage.getItem("4pmHour"));
    userInput16.val(savedInput8);  

$(saveBtn17).on("click", function (e){
    e.preventDefault();
    var userInput17 = $("#5PMinput").val().trim();
    localStorage.setItem("5pmHour",(userInput17));
});
    var savedInput9 = (localStorage.getItem("5pmHour"));
    userInput17.val(savedInput9);  
