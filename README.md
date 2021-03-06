# Work Day Scheduler

![workday scheduler](work-day-scheduler-image.PNG)

This is a simple calendar that you can use to keep track of appointments, events, and other things to do throughout your workday.

The calendar keeps track of the current time using [Moment.js](https://momentjs.com/).

Time slots are color-coded for convenience:
- Past - grey
- Present - red (urgent!)
- Future - green

## How It Works

Type whatever you'd to keep track of in the appropriate time slot, then click the save button next to it.

Your input will be saved in local storage, so you can leave the page if you wish and return to it later. It will still be there.

Every 15 seconds, the page checks to see if the hour has changed. When it does change, the color codes are automatically updated.

## Deployed Application

You can find this project deployed live [here](https://brenhamp.github.io/work-day-scheduler)
