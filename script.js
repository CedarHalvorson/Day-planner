const currentDay = document.getElementById("currentDay");
//Uses moment.js to get the current time. 
currentDay.textContent = (moment().format("MMMM Do YYYY, HH:mm"));

let localHour = parseInt((moment().format("HH")));
console.log(localHour);

// make pretty colors based off time
let allBlockThings = document.querySelectorAll(".row") 

// make a variable for grabbing all times 
let allTimes = document.querySelectorAll(".hour")



function colorChange() {
    for (let i = 0; i < allTimes.length; i++){
        let hourNumber = parseInt(allTimes[i].textContent);
        console.log(hourNumber);
        if (hourNumber<localHour){
            allBlockThings[i].classList.add("past");
        } else if (hourNumber===localHour){
            allBlockThings[i].classList.add("present"); 
        } else if (hourNumber>localHour){
            allBlockThings[i].classList.add("future");
        }
    }
}

document.onload = colorChange();

