// Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ..

//we are solving it using switch case

var day="sun";
switch (day)
{
    case "sun":
    console.log("Sunday");
    break;
    case "mon":
    console.log("Monday")
    break;
    case "tue":
    console.log("Tuesday")
    break;
    case "wed":
    console.log("Wednesday")
    break;
    case "Thur":
    console.log("Thursday")
    break;
    case day=="fri":
    console.log("Friday")
    break;
    case "sat":
    console.log("Saturday")
    break;
    default:
    console.log("wrong choice")
}