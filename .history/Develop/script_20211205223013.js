

$(document).ready(function() {

    //display today's date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().format("H A");
var events = [];

    //when the user clicks the save button
    $(".saveBtn").click(function(event) {
        //pull the time ID from the chosen slot
        var value = $(this).siblings(".plan").val();
        var time = $(this).parent().attr("id");
        var dateAdded = moment().format("dddd, MMMM Do");

        events.push({description: value, time: time, date: dateAdded});

        //put in local storage
        localStorage.setItem("events", JSON.stringify(events));
    });

    //check if user's current time is before or after the selected time slot
function timeCheck() {
    //get current hour
    var hourNow = moment().hours();
    console.log(hourNow);

    //check hour of each block
    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).attr("id"));
        console.log(timeBlockHour);


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
        $(this).removeClass("future");
        $(this).addClass("present");
    }
});
}

//call the function
timeCheck();

//check if current time has changed
var secondsLeft = 15;
function setTime() {
    setInterval(function() {
        secondsLeft--;

        if (secondsLeft === 0) {
            timeCheck();
            secondsLeft = 15;
        }

    }, 1000);
    }
    setTime();

//check if the date has rolled over
var today = moment().format("dddd, MMMM Do");
    for (var i = 0; i < events.length; i++) {
        if (today.isAfter(events[i].date)) {
            events[i].description = "";
            events[i].time = "";
            events[i].date = "";
            events.length = 0;
        }
    }

//check localstorage for saved data in any time block
var storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents !== null) {
        events = storedEvents;
    }

    for (var i = 0; i < events.length; i++) {
        var userDescription = events[i].description;
        $("#" + events[i].time).children(".plan").text(userDescription);
    }

var interval = setInterval(timeCheck, 15000)
});
