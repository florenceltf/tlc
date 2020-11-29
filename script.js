function updateTime() {
    var time = (new Date()).toLocaleTimeString({}, { hour12: true, hour: '2-digit', minute: '2-digit' }).toUpperCase().replace(" AM", "").replace(" PM", "")
    console.log(time)

    document.getElementById("time").innerHTML = time + " Chai O'Clock";

    setTimeout(updateTime,
        1000
    );
}

updateTime();

let number = 0;
const stamps = [
    "assets/flower.png",
    "assets/dot.png"
]

const stampsTag = document.querySelector("div.stamps");

const addStamps = function (x, y) {
    const img = document.createElement("img");
    img.setAttribute("src", stamps[number]);
    img.style.left = (x - window.innerWidth / 2) + "px";
    img.style.top = y + "px";

    stampsTag.appendChild(img);

    number = number + 1;
    if (number > stamps.length - 1) {
        number = 0;
    }
}


document.addEventListener("click", function (event) {
    addStamps(event.pageX, event.pageY);

    // window.setTimeout(function () {
    //     document.querySelector("div.stamps").remove();
    // }, 5000);

})

