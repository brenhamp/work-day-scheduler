//variables to add date formatting, and to pull the current time on the user's system
var d = new Date();
var today = new Date();
//var time = today.getHours;

$(document).ready(function() {
    //when the user clicks the save button
    $(".saveBtn").click(function(event) {
        //pull the time ID from the chosen slot
        var value = $(this).siblings(".plan").val();
        var time = $(this).parent.attr("id");

        //put in local storage
        localStorage.setItem(value, time);
    });

    //check if user's current time is before or after the selected time slot
function timeCheck() {
    //get current hour
    var hourNow = moment().hours();

    //check hour of each block
    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    })

    //compare and assign classes
    if (timeBlockHour < hourNow) {
        $(this).addClass("past");
    }

    else if (timeBlockHour > hourNow) {
        $(this).addClass("future");
    }

    else {
        $(this).addClass("present");
    }
};

//call the function
timeCheck();

    var valueW = $(this).siblings(".plan").val();
    console.log(valueW);
    localStorage.setItem("9", valueW);


document.getElementById("currentDay").innerHTML = d;



$("#9-hour .plan").val(localStorage.getItem("9"));

$(document).ready(function() {
    $(".time-block").each(function(index) {
        var hourInd=
        $(this).attr("id"); 
        if (valueW === hourInd) {
             $(this).addClass("present");
            }
    });
});

if (time > )