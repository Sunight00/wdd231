const url = "https://sunight00.github.io/wdd231/chamber/data/discover.json"

const ur = "https://sunight00.github.io/wdd231/chamber/data/members.json"

async function  images() {
    let response = await fetch(url);
    let data = await response.json();
    
    //displayMembers(data.companies);   
    
    //displaycard(data.companies);
    discover(data.sites)
  
}
images();
function discover(sites){
    sites.forEach(info => {
        let card= document.createElement("section")
        let title = document.createElement("h2");
        /*let img = document.createElement("a");
        let description = document.createElement("p");
        let button = document.createElement("button");*/

        title.innerHTML = info.title;
        card.appendChild(title);

        document.querySelector("#discoverymain").appendChild(card);
    });
}