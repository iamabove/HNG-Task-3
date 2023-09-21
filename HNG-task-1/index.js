let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days.map((day, index) => {
    if(index == new Date().getDay()) {
        document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML = day;
    }
})

function clock () {
    let time = new Date()
    let hour = time.getUTCHours()
    hour = hour > 12 ? hour % 12 : hour;
    let AmOrPm = hour >= 12 ? 'PM' : 'AM';
    let minute = time.getUTCMinutes()
    let seconds = time.getUTCSeconds()
    const currentTime = hour + ':' + minute + ':' + seconds + AmOrPm
    
    document.querySelector("[data-testid='currentUTCTime']").innerHTML = currentTime
}

let update = setInterval(clock)


