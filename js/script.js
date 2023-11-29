"use strict";
const input = document.querySelector("input"), form = document.querySelector("form"), searchIcon = document.querySelector(".search-icon"), weatherImage = document.querySelector(".weather-image img"), temp = document.querySelector("#temp"), weatherLocation = document.querySelector(".weather-location"), weatherIcon = document.querySelector("#weatherIcon"), humidityPercentage = document.querySelector("#humidity-percentage"), windRate = document.querySelector("#wind-rate");
input.addEventListener("input", () => {
    if (input.value.length) {
        weatherLocation.textContent = input.value;
    }
});
