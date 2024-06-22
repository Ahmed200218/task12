
let input = document.getElementById("search")
let cityx = document.getElementById("city")
let iconx = document.getElementById("icon")
let conditiontextx = document.getElementById("conditiontext")
let tempx = document.getElementById("temp")
let windx = document.getElementById("wind")
let windirx = document.getElementById("windir")
let humidityx = document.getElementById("humidity")
let nexttempmax1 = document.getElementById("nexttempmax11")
let nexttempmin1 = document.getElementById("nexttempmin11")
let nexttempmax2 = document.getElementById("nexttempmax22")
let nexttempmin2 = document.getElementById("nexttempmin22")
let nextconditiontext1 = document.getElementById("nextconditiontext11")
let nextconditiontext2 = document.getElementById("nextconditiontext22")
let nextconditionicon1 = document.getElementById("nextconditionicon11")
let nextconditionicon2 = document.getElementById("nextconditionicon22")
let day1nums = document.getElementById("day1nums")
let day111 = document.getElementById("day111")
let day222 = document.getElementById("day222")
let day333 = document.getElementById("day333")
let dayxx;

input.addEventListener("input", function () {
    let c = input.value;
    weather(c);
})


const successCallback = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    loc(latitude, longitude)
};




const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
loc();










async function loc(latitude, longitude) {

    let responseloc = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=ac32506ae07c4be6a65765103613036c`);
    let dataloc = await responseloc.json();
    let c = dataloc.results[0].components.country;
    weather(c)
}



async function weather(c) {

    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=faf46b825f7941ada4d115012242106&q=${c}&days=3`);
    let data = await response.json();
    cityx.innerHTML = data.location.name;
    iconx.setAttribute('src', "http:" + data.current.condition.icon);
    conditiontextx.innerHTML = data.current.condition.text;
    tempx.innerHTML = data.current.temp_c + '<sup>o</sup>' + "C";
    windx.innerHTML = '<img class="scale-5" src="images/icon-wind@2x.png" alt="" >' + data.current.wind_kph + "Km/h";
    windirx.innerHTML = '<img class="scale-5" src="images/icon-compass@2x.png" alt="" >' + data.current.wind_dir;
    humidityx.innerHTML = '<img class="scale-5" src="images/icon-umberella@2x.png" alt="" >' + data.current.humidity + "%";
    nexttempmax1.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + '<sup>o</sup>' + "C";
    nexttempmin1.innerHTML = data.forecast.forecastday[1].day.mintemp_c + '<sup>o</sup>' + "C";
    nexttempmax2.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + '<sup>o</sup>' + "C";
    nexttempmin2.innerHTML = data.forecast.forecastday[2].day.mintemp_c + '<sup>o</sup>' + "C";
    nextconditiontext1.innerHTML = data.forecast.forecastday[1].day.condition.text
    nextconditiontext2.innerHTML = data.forecast.forecastday[2].day.condition.text
    nextconditionicon1.setAttribute('src', "http:" + data.forecast.forecastday[1].day.condition.icon);
    nextconditionicon2.setAttribute('src', "http:" + data.forecast.forecastday[2].day.condition.icon);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    let day1 = new Date(data.forecast.forecastday[0].date);
    let day2 = new Date(data.forecast.forecastday[1].date);
    let day3 = new Date(data.forecast.forecastday[2].date);

    let day = day1.getUTCDate();
    let month = day1.getUTCMonth();

    day1nums.innerHTML = day + " " + months[month];
    array1 = day1.toString().split(" ");
    array2 = day2.toString().split(" ");
    array3 = day3.toString().split(" ");
    tofullname(array1[0])
    day111.innerHTML=dayxx;
    tofullname(array2[0])
    day222.innerHTML=dayxx;
    tofullname(array3[0])
    day333.innerHTML=dayxx;

}



function tofullname(day) {
    if (day == "Sat") {
        dayxx= "saturday"
    }
    else if (day == "Sun") {
        dayxx = "sunday"
    }
    else if (day == "Mon") {
        dayxx = "Monday"
    }
    else if (day == "Tue") {
        dayxx = "Tusday"
    }
    else if (day == "Wed") {
        dayxx= "Wednesday"
    }
    else if (day == "Thu") {
        dayxx= "Thursday"
    }
    else if (day == "Fri") {
        dayxx= "Friday"
    }

}