function updateTime() {
    var time = (new Date()).toLocaleTimeString({}, { hour12: true, hour: '2-digit', minute: '2-digit' }).toUpperCase().replace(" AM", "").replace(" PM", "")
    console.log(time)

    document.getElementById("time").innerHTML = time + " Chai O'Clock";

    setTimeout(updateTime,
        1000
    );
}

updateTime();



