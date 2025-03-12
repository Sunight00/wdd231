const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
//const cards = document.querySelector('#cards');

async function getProphetData(){
    let response = await fetch(url);

    let data = await response.json();
    //console.table(data.prophets);

    displayProphets(data.prophets)

}

const displayProphets = (prophets) => 
    {
        
    }

getProphetData();