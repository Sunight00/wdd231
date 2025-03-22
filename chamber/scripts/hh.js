const url = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  getMembers() {
    let response = await fetch(url);
    let data = await response.json();
    
    //displayMembers(data.companies);   
    
    //displaycard(data.companies);
    gold(data.companies);
}
getMembers();



 function gold(company)
 {
    let goldMember = company.filter((company)=>company.membership=="gold")
    
    goldMember.forEach(member => {
        
        /*console.log(member.name)
        console.log(member.tag)
        console.log(member.email)
        console.log(member.phone)
        console.log(member.website)*/
        
        let card = document.createElement("section");
        let info = document.createElement("div");
        info.setAttribute("class", "info");
        let name = document.createElement("h2");
        let tag = document.createElement("p");
        let image = document.createElement("img");
        image.setAttribute("src", member.image);
        image.setAttribute("alt", member.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let lv = document.createElement("p");
        


        name.innerHTML = member.name;
        tag.innerHTML = member.tag;
        email.innerHTML = `EMAIL: ${member.email}`;
        phone.innerHTML = `PHONE; ${member.phone}`;
        website.setAttribute("href", member.website);
        website.innerHTML = `URL: Visit site`;
        lv.innerHTML = `Membership Level: ${member.membership}`;

        card.appendChild(name);
        card.appendChild(tag);

        
        info.appendChild(image);
        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(website);
        info.appendChild(lv);

        card.appendChild(info);
        document.querySelector(".goldMember").appendChild(card);
        
       
        
    });
};


//FOR WEATHER
const urll = "https://api.openweathermap.org/data/2.5/weather?lat=4.85&lon=6.99&units=metric&mode=json&appid=86de64ce4c4c54ce2cce125aca2c4719"

async function getWeather() {
    let response = await fetch(urll);
    let data = await response.json();
    //console.log(data);
    displayWeather(data);
    getForecast(data);
    
}
getWeather();


//displayWeather(getWeather());
function displayWeather(collection) 
{
    let temp = document.createElement("p");
    temp.innerHTML = `${collection.main.temp}° F`;

    let description = document.createElement("p");
    description.innerHTML = collection.weather[0].description;

    document.querySelector("#current").appendChild(temp);
    document.querySelector("#current").appendChild(description);

}

//const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=4.85&lon=6.99&units=metric&mode=json&appid=86de64ce4c4c54ce2cce125aca2c4719"

function getForecast() 
{   
    //let today = document.createElement("p");
    let sat = document.createElement("p");
    let sun = document.createElement("p");

    today.innerHTML = `Today: ${collection.main.temp}° F`;
    sat.innerHTML = "Saturday: 75° F";
    sun.innerHTML = "Sunday: 80° F";
    
    document.querySelector("#forecast").appendChild(sat);
    document.querySelector("#forecast").appendChild(sun);
}

