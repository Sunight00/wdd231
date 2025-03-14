const url = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  getMembers() {
    let response = await fetch(url);
    let data = await response.json();
    
    displayMembers(data.companies);   
}

 // Promise {<pending>}


 function displayMembers(members) {
    members.forEach(member => {
       
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let logo = document.createElement("img");

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", member.name);
        logo.setAttribute("loading", "lazy");

        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phone.innerHTML = member.phone;
        website.innerHTML = member.website;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        const n = document.querySelector("#members");
        n.appendChild(card);

    });
 }

 getMembers();