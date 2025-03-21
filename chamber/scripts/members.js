const url = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  getMembers() {
    let response = await fetch(url);
    let data = await response.json();
    
    displayMembers(data.companies);   
    
    displaycard(data.companies);
}

 // Promise {<pending>}


 function displayMembers(members) {
    members.forEach(member => {
       
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", member.name);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "200");

        console.log(member.name)
       

        name.innerHTML = member.name;
        address.innerHTML = member.address;
        phone.innerHTML = member.phone;
        website.setAttribute("href", member.website);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        const n = document.querySelector(".grid");
        n.appendChild(card);

    });
 }




































































 
 getMembers();



 const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



let g = document.querySelector("#j");
g.innerHTML="Hello World";

