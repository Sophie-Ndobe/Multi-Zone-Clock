function timeDateUpdate() {
    //Paris
    let parisDateElement = document.querySelector("#par-date");
    let updatedParisDate = moment().format("MMMM Do, YYYY");
    parisDateElement.innerHTML = updatedParisDate;

    let parisTimeElement = document.querySelector("#par-time");
    let updatedParisTime = moment.tz("Europe/Paris").format("H:mm:ss [<small>] A[</small>]");
    parisTimeElement.innerHTML = updatedParisTime;

    //Shanghai
    let shanghaiDateElement =  document.querySelector("#sha-date")
    let updatedShanghaiDate = moment().format("MMMM Do, YYYY");
    shanghaiDateElement.innerHTML = updatedShanghaiDate;

    let shanghaiTimeElement = document.querySelector("#sha-time");
    let updatedShanghaiTime = moment.tz("Asia/Shanghai").format("H:mm:ss [<small>] A[</small>]");
    shanghaiTimeElement.innerHTML = updatedShanghaiTime;
}

function updateTimeDate(event){
    let changedCity = event.target.value;
    let changedCityDate = moment().format("MMMM Do, YYYY");
    let changedCityTime = moment.tz(changedCity).format("H:mm:ss [<small>] A[</small>]");

    //console.log(changedCityTime);

    let citiesUpdateElement = document.querySelector("#cities-update")
    /*
    citiesUpdateElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${changedCity}</h2>
                <div class="date">${changedCityDate}</div>
            </div>
            <div class="time">${changedCityTime}</div>
            </div>
    `
    */
   citiesUpdateElement.innerHTML = `
        <h2>${changedCity}</h2>
        <div>${changedCityDate}</div>
        <div>This is the round clock code</div>
        <div>${changedCityTime}</div>

   `


}

timeDateUpdate();
setInterval(timeDateUpdate, 1000);

let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateTimeDate);