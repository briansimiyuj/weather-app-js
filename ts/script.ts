const input = document.querySelector("input") as HTMLInputElement,
      form = document.querySelector("form") as HTMLFormElement,
      searchIcon = document.querySelector(".search-icon") as HTMLButtonElement,
      weatherImage = document.querySelector(".weather-image img") as HTMLImageElement,
      temp = document.querySelector("#temp") as HTMLSpanElement,
      weatherLocation = document.querySelector(".weather-location") as HTMLDivElement,
      weatherIcon = document.querySelector("#weatherIcon") as HTMLImageElement,
      humidityPercentage = document.querySelector("#humidity-percentage") as HTMLSpanElement,
      windRate = document.querySelector("#wind-rate") as HTMLSpanElement

console.log(input, form, searchIcon, weatherImage, temp, weatherLocation, weatherIcon, humidityPercentage, windRate)