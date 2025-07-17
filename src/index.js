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





