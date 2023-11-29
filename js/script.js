"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const input = document.querySelector("input"), form = document.querySelector("form"), searchIcon = document.querySelector(".search-icon"), weatherImage = document.querySelector(".weather-image img"), temp = document.querySelector("#temp"), weatherLocation = document.querySelector(".weather-location"), weatherIcon = document.querySelector("#weatherIcon"), humidityPercentage = document.querySelector("#humidity-percentage"), windRate = document.querySelector("#wind-rate");
input.addEventListener("input", () => {
    if (input.value.length) {
        weatherLocation.textContent = input.value;
    }
    search();
});
const APIKey = "30d95878ab2819e2f838a7f9024d365d";
const search = () => __awaiter(void 0, void 0, void 0, function* () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.textContent}&units=Metric&appid=${APIKey}`, response = yield fetch(URL), data = yield response.json();
    console.log(data);
});
