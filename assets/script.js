//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that
// city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon
// representation of weather conditions, the temperature, the 
//humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the 
//date, an icon representation of weather conditions, the temperature,
// the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for 
//that city

function getWeather() {
    const apiKey = "c0e11bdb32749d04b1da3814d11f85ea";
    const city = document.getElementById("enter-city");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=imperial`;
    console.log(city.value)

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".temp").textContent = data.main.temp + " F"
            document.querySelector(".wind").textContent = data.wind.speed
            document.querySelector(".humidity").textContent = data.main.humidity
            console.log(data)
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    document.querySelector(".humidity0").textContent = data.list[1].main.humidity
                    document.querySelector(".wind0").textContent = data.list[1].wind.speed
                    document.querySelector(".temp0").textContent = data.list[1].main.temp

                    document.querySelector(".humidity1").textContent = data.list[9].main.humidity
                    document.querySelector(".wind1").textContent = data.list[9].wind.speed
                    document.querySelector(".temp1").textContent = data.list[9].main.temp

                    document.querySelector(".humidity2").textContent = data.list[17].main.humidity
                    document.querySelector(".wind2").textContent = data.list[17].wind.speed
                    document.querySelector(".temp2").textContent = data.list[17].main.temp

                    document.querySelector(".humidity3").textContent = data.list[25].main.humidity
                    document.querySelector(".wind3").textContent = data.list[25].wind.speed
                    document.querySelector(".temp3").textContent = data.list[25].main.temp

                    document.querySelector(".humidity4").textContent = data.list[33].main.humidity
                    document.querySelector(".wind4").textContent = data.list[33].wind.speed
                    document.querySelector(".temp4").textContent = data.list[33].main.temp
                })
        })
    let btn = document.createElement("button")
    btn.textContent = city.value
    document.querySelector("#search-result").appendChild(btn)


}

document.getElementById("search-btn").addEventListener("click", getWeather);
