function convertNumToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (hours <= 1 && minutes <= 1) {
        console.log(hours + " hours, " + minutes + " minutes.");
    } else if (hours > 1 && minutes == 1) {
        console.log(hours + " hours, " + minutes + " minute.");
    } else if (hours <= 1 && minutes > 1) {
        console.log(hours + " hour, " + minutes + " minutes.");
    } else {
        console.log(hours + " hours, " + minutes + " minutes.");
    }
    
}

convertNumToTime(90);
convertNumToTime(71);
convertNumToTime(133);
convertNumToTime(61);
convertNumToTime(0);