const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(){
    let response = await fetch(url);

    let data = await response.json();
    //console.table(data.prophets);

    displayProphets(data.prophets)

}

const displayProphets = (prophets) => 
    {
        prophets.forEach(prophet => {
            let card = document.createElement("section");
            let fullName = document.createElement("h2");
            let portrait = document.createElement("img");
            let birth = document.createElement('p');
            let birthPlace = document.createElement('p'); 

            fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
            birth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
            birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '200');
            portrait.setAttribute('height', '200');

            card.appendChild(fullName);
            card.appendChild(birth);
            card.appendChild(birthPlace);
            card.appendChild(portrait);

            cards.appendChild(card);

        });
    }

getProphetData();