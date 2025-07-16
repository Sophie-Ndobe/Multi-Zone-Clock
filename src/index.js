function timeDateUpdate() {
    //Paris
    let parisDateElement = document.querySelector("#par-date");
    let updatedParisDate = moment().format("MMMM Do YYYY");
    parisDateElement.innerHTML = updatedParisDate;

    let parisTimeElement = document.querySelector("#par-time");
    let updatedParisTime = moment.tz("Europe/Paris").format("h:mm:ss [<small>] A[</small>]");
    parisTimeElement.innerHTML = updatedParisTime;

    //Shanghai
    let shanghaiDateElement =  document.querySelector("#sha-date")
    let updatedShanghaiDate = moment().format("MMMM Do YYYY");
    shanghaiDateElement.innerHTML = updatedShanghaiDate;

    let shanghaiTimeElement = document.querySelector("#sha-time");
    let updatedShanghaiTime = moment.tz("Asia/Shanghai").format("h:mm:ss [<small>] A[</small>]");
    shanghaiTimeElement.innerHTML = updatedShanghaiTime;
}

timeDateUpdate();
setInterval(timeDateUpdate, 1000);