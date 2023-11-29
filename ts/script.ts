const input = document.querySelector("input") as HTMLInputElement,
      form = document.querySelector("form") as HTMLFormElement,
      searchIcon = document.querySelector(".search-icon") as HTMLButtonElement,
      weatherImage = document.querySelector(".weather-image img") as HTMLImageElement,
      temp = document.querySelector("#temp") as HTMLSpanElement,
      weatherLocation = document.querySelector(".weather-location") as HTMLDivElement,
      weatherIcon = document.querySelector("#weatherIcon") as HTMLImageElement,
      humidityPercentage = document.querySelector("#humidity-percentage") as HTMLSpanElement,
      windRate = document.querySelector("#wind-rate") as HTMLSpanElement



input.addEventListener("input", () =>{

    if(input.value.length){

        weatherLocation.textContent = input.value

    }``

    search()

})


const APIKey = "30d95878ab2819e2f838a7f9024d365d"


const search = async () =>{

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.textContent}&units=Metric&appid=${APIKey}`,

      response = await fetch(URL),

      data = await response.json()

   humidityPercentage.textContent = Math.floor(data.main.humidity).toString()

   temp.textContent = Math.floor(data.main.temp).toString()

}