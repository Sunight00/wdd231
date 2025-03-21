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
        

        console.log(member.name)
        console.log(member.tag)
        console.log(member.email)
        console.log(member.phone)
        console.log(member.website)
        /*
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let tag = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        name.innerHTML = member.name;
        tag.innerHTML = member.tag;
        email.innerHTML = member.email;
        phone.innerHTML = member.phone;
        website.setAttribute("href", member.website);

        console.log(member.name)
        console.log(member.tag)
        console.log(member.email)
        console.log(member.phone)
        console.log(member.website)
        */

        
    });
};



/*
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


getMembers(); */