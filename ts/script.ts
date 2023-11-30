type WeatherIconCode = "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "09d" | "09n" | "10d" | "10n" | "13d" | "13n"

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

    }

    search()

})


const APIKey = "30d95878ab2819e2f838a7f9024d365d"


const search = async () =>{

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.textContent}&units=Metric&appid=${APIKey}`,

      response = await fetch(URL),

      data = await response.json()

   humidityPercentage.textContent = Math.floor(data.main.humidity).toString()

   temp.textContent = Math.floor(data.main.temp).toString() 

   windRate.textContent = Math.floor(data.wind.speed).toString()

   
    const iconMapping: Record<WeatherIconCode, string> = {
        "01d": "../img/clear.png",
        "01n": "../img/clear.png",
        "02d": "../img/cloud.png",
        "02n": "../img/cloud.png",
        "03d": "../img/drizzle.png",
        "03n": "../img/drizzle.png",
        "04d": "../img/drizzle.png",
        "04n": "../img/drizzle.png",
        "09d": "../img/rain.png",
        "09n": "../img/rain.png",
        "10d": "../img/rain.png",
        "10n": "../img/rain.png",
        "13d": "../img/snow.png",
        "13n": "../img/snow.png",
    }

    const apiIconCode: WeatherIconCode = data.weather[0].icon

    if(weatherImage && iconMapping.hasOwnProperty(apiIconCode)){

        weatherImage.src = iconMapping[apiIconCode]

    }else{
        
        alert('Invalid icon code or element not found')
        
    }

}


