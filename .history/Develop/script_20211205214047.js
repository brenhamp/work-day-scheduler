//variables to add date formatting, and to pull the current time on the user's system
var d = new Date();
var today = new Date();
//var time = today.getHours;

//display today's date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

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


    //compare and assign classes
    if (timeBlockHour < hourNow) {
        $(this).addClass("past");
    }

    else if (timeBlockHour > hourNow) {
        $(this).removeClass("past");
        $(this).addClass("future");
    }

    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("present");
    }
});
//call the function
timeCheck();

//check localstorage for saved data in any time block
$("#9 .plan").val(localStorage.getItem("9"));
    $("#9").val("");
    $("#9").val
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#1 .plan").val(localStorage.getItem("1"));
$("#2 .plan").val(localStorage.getItem("2"));
$("#3 .plan").val(localStorage.getItem("3"));
$("#4 .plan").val(localStorage.getItem("4"));
$("#5 .plan").val(localStorage.getItem("5"));
};

var interval = setInterval(timeCheck, 15000);