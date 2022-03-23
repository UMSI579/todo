export const dateAndTimeToTimestamp = (dueDate, dueTime) => {
    // const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    // const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) {
        // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return parseInt(dueDate) + parseInt(dueTime) + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}