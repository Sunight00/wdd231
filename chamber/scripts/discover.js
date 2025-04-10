const url = "https://sunight00.github.io/wdd231/chamber/data/discover.json"

const ur = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  sites() {
    let response = await fetch(url);
    let data = await response.json();
    
    //displayMembers(data.companies);   
    
    //displaycard(data.companies);
    discover(data.sites)
    
  
}
sites();

function discover(goo){
    goo.forEach(info => {
        let card= document.createElement("section");
        let title = document.createElement("h2");
        let img = document.createElement("img");
        let description = document.createElement("p");
        description.setAttribute("class", "description");
        let address = document.createElement("p");
        address.setAttribute("class", "address");
        let button = document.createElement("button");

        title.innerHTML = info.title;
        img.setAttribute("src", info.image);
        img.setAttribute("alt", info.title);
        img.setAttribute("loading", info.loading);
        
        
        description.innerHTML = info.description;
        address.innerHTML = info.address;

        button.innerHTML = "Learn More";
        //button.setAttribute("href", "#");

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        document.querySelector("#discoverymain").appendChild(card);
    });
}

window.addEventListener("load", function() {
    const date = localStorage.getItem("date");
    window.alert(`Last session ${date}`);
    const today = new Date();

    const day = today.getDay()+1;
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const Datee= `${day}/${month}/${year} : ${time}`;
    localStorage.setItem("date", Datee);
    //document.querySelector("#aa").innerHTML = date;
})

/*
function date(){
const today = new Date();

const day = today.getDay()+1;
const month = today.getMonth()+1;
const year = today.getFullYear();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const Datee= `${day}/${month}/${year}  ${time}`;
localStorage.setItem("date", Datee);
}*/




