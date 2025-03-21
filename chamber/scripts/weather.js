//const url = "https://sunight00.github.io/wdd231/chamber/data/weather.json"

const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.85&lon=6.99&units=metric&mode=json&appid=86de64ce4c4c54ce2cce125aca2c4719"

async function getWeather() {
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    displayWeather(data);
    
}

getWeather();

// geting display variable

//displayWeather(getWeather());
function displayWeather(collection) 
{
    collection.forEach(data => {
        //let tem = document.createElement("p");
        console.log(data.main.temp)

   

    })
    
}