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
        let button = document.createElement("a");

        title.innerHTML = info.title;
        img.setAttribute("src", info.image);
        img.setAttribute("alt", info.title);
        
        
        description.innerHTML = info.description;
        address.innerHTML = info.address;

        button.innerHTML = "Learn More";
        button.setAttribute("href", "#");

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        document.querySelector("#discoverymain").appendChild(card);
    });
}