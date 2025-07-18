function timeDateUpdate() {
    //Paris
    let parisDateElement = document.querySelector("#par-date");
    let updatedParisDate = moment.tz("Europe/Paris").format("MMMM Do, YYYY");

    if (parisDateElement) {
        parisDateElement.innerHTML = updatedParisDate;
    }

    let parisTimeElement = document.querySelector("#par-time");
    let updatedParisTime = moment.tz("Europe/Paris").format("H:mm:ss [<small>] A[</small>]");

    if (parisTimeElement) {
        parisTimeElement.innerHTML = updatedParisTime;
    }

    //Shanghai
    let shanghaiDateElement =  document.querySelector("#sha-date")
    let updatedShanghaiDate = moment.tz("Asia/Shanghai").format("MMMM Do, YYYY");

    if (shanghaiDateElement) {
        shanghaiDateElement.innerHTML = updatedShanghaiDate;
    }

    let shanghaiTimeElement = document.querySelector("#sha-time");
    let updatedShanghaiTime = moment.tz("Asia/Shanghai").format("H:mm:ss [<small>] A[</small>]");

    if (shanghaiTimeElement) {
        shanghaiTimeElement.innerHTML = updatedShanghaiTime;
    }
}

function updateTimeDate(event){
    let changedCity = event.target.value;

    if (selectedCityInterval) {
        clearInterval(selectedCityInterval);
    }

    if (analogClockInterval) {
        clearInterval(analogClockInterval);
    }

    let cityName = changedCity.replace("_", " ").split("/")[1];
    let changedCityDate = moment().format("MMMM Do, YYYY");
    let changedCityTime = moment.tz(changedCity).format("H:mm:ss [<small>] A[</small>]");

    let citiesUpdateElement = document.querySelector("#cities-update")
    citiesUpdateElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date" id="updated-date">${changedCityDate}</div>
            </div>
            <div class="clock-body">
                <div class="hour hour-12">XII</div>
                <div class="hour hour-3">III</div>
                <div class="hour hour-6">VI</div>
                <div class="hour hour-9">IX</div>
                <div class="hour-hand-container" id="hour-hand">
                    <div class="hour-hand">
                        <div class="hand"></div>
                        <div class="arrow">▲</div>
                    </div>
                </div>
                <div class="minute-hand-container" id="minute-hand">
                    <div class="minute-hand">
                        <div class="hand"></div>
                        <div class="arrow">▲</div>
                    </div>
                </div>
                <div class="second-hand-container" id="second-hand">
                    <div class="second-hand">
                        <div class="hand"></div>
                    </div>
                </div>
            </div>
            <div class="time" id="updated-time">${changedCityTime}</div>
            <div>
                <a href="/">Back to Home</a>
            </div>

        </div>
         `;


    let containerElement = document.querySelector("#container");
    containerElement.classList.add("updated-city-page");

    selectedCityInterval = setInterval(() => {
        let updatedDate = moment().format("MMMM Do, YYYY");
        let updatedTime = moment.tz(changedCity).format("H:mm:ss [<small>] A[</small>]");

        document.querySelector("#updated-date").innerHTML = updatedDate;
        document.querySelector("#updated-time").innerHTML = updatedTime

    }, 1000);

    analogClockInterval = setInterval(() => {
            let timeZone = moment.tz(changedCity);

            let second = timeZone.second() *6;
            let minute = timeZone.minute() *6;
            let hour = timeZone.hour() % 12 * 30 + Math.round(minute / 12);

            let secondHandElement = document.querySelector("#second-hand");
            secondHandElement.style.transform = "rotate(" + second + "deg)";

            let minuteHandElement = document.querySelector("#minute-hand");
            minuteHandElement.style.transform = "rotate(" + minute + "deg)";

            let hourHandElement = document.querySelector("#hour-hand");
            hourHandElement.style.transform = "rotate(" + hour + "deg)";

        }, 1000);
}

timeDateUpdate();
setInterval(timeDateUpdate, 1000);

let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateTimeDate);

let selectedCityInterval;
let analogClockInterval;



