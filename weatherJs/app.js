const temperature = document.getElementById("temperature")


const weather = {
    "apiKey": "16fdad4ab3da1430bcf85795c994bdae"
}

const fechData = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather.apiKey}&units=metric`)
    const res = await response.json()
    console.log(res);
    temperature.innerText = res.main.temp
}
fechData("london")