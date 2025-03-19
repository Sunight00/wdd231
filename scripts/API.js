const currentTemp = doucument.querySelector("#current-temp");
const weatherIcon = doucument.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const url ="https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=86de64ce4c4c54ce2cce125aca2c4719";

/*async function apiFetch()
{
    try 
    {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
            
        }
        /*else{
            console.error("Error fetching the API:", response.statusText);
        }*/
        /*else {
            throw new TypeError(await response.text());}
    } 
    catch (error) 
    {
        console.error(error);
    }

}*/


async function apiFetch(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

apiFetch();