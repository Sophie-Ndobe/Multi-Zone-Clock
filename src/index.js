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

let selectedCityInterval;

function updateTimeDate(event){
    let changedCity = event.target.value;

    if (selectedCityInterval) {
        clearInterval(selectedCityInterval);

    }


    function updatedSelectedCityInfor() {
        let cityName = changedCity.replace("_", " ").split("/")[1];
        //console.log(cityName);
        let changedCityDate = moment().format("MMMM Do, YYYY");
         let changedCityTime = moment.tz(changedCity).format("H:mm:ss [<small>] A[</small>]");

        let citiesUpdateElement = document.querySelector("#cities-update")
        citiesUpdateElement.innerHTML = `
            <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${changedCityDate}</div>
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
                            <div class="arrow">▲</div>
                        </div>
                    </div>
                </div>
                <div class="time">${changedCityTime}</div>
            </div>
         `;
    }

    updatedSelectedCityInfor();
    selectedCityInterval = setInterval(updatedSelectedCityInfor, 1000);
}

timeDateUpdate();
setInterval(timeDateUpdate, 1000);



let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateTimeDate);





