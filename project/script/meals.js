const url = "https://sunight00.github.io/wdd231/project/data/meals.json"

async function getMeals() {
    const response = await fetch(url);
    const data = await response.json();
    const meals = data.dishes;
    createForeign(meals);
}

/*
n=0;
let card = document.createElement('section');
const modal = document.createElement('dialog');
modal.setAttribute('id', `modal${n}`);
const name = document.createElement('h2');
const origin = document.createElement('p');
name.innerHTML="aaaaaa";
origin.innerHTML="ssssssssssss";

let image = document.createElement('img');
image.setAttribute('src', 'images/images/sSushi.webp');
modal.appendChild(name);
modal.appendChild(origin);
let button =document.createElement('button');
button.innerHTML="open";
button.setAttribute('id', `show0`);

card.appendChild(image);
card.appendChild(button);
card.appendChild(modal);

document.querySelector('.foreign').appendChild(card);*/




getMeals();



/*
function createForeign(dish)
{   
    dish.forEach(dishes => {
    let n = 1;
    let card = document.createElement('section');
    card.setAttribute('id', `card${n}`);
    let name = document.createElement('h2');
    let origin = document.createElement('p');
    let recipe = document.createElement('p');
    let health_benefits = document.createElement('p');
    let image = document.createElement('img');
    
    name.innerHTML = dishes.name;
    origin.innerHTML =`ORIGIN: ${dishes.origin}`;
    recipe.innerHTML =`RECIPE: ${dishes.recipe}`;
    health_benefits.innerHTML =`HEALTH BENEFITS: ${dishes.health_benefits}`;
    image.setAttribute('src', dishes.image);
    image.setAttribute('alt', dishes.name);
    image.setAttribute('width', '350px');
    image.setAttribute('height', '300px');



    const space = document.createElement('br');
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(origin);
    card.appendChild(recipe);
    card.appendChild(space);
    card.appendChild(health_benefits);

    document.querySelector('.foreign').appendChild(card);
    
    });
}
*/



function createForeign(dish)
{   
    dish.forEach(dishes => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let origin = document.createElement('p');
    let recipe = document.createElement('p');
    let health_benefits = document.createElement('p');
    let image = document.createElement('img');
    const modal = document.createElement('dialog');
    modal.setAttribute('id',dishes.id); 

    let button = document.createElement('button');
    button.setAttribute('id', `show${n}`);
    button.innerHTML = "DETAILS";
    
    name.innerHTML = dishes.name;
    origin.innerHTML = dishes.origin;
    recipe.innerHTML = dishes.recipe;
    health_benefits.innerHTML = dishes.health_benefits;
    image.setAttribute('src', dishes.image);
    image.setAttribute('alt', dishes.name);
    image.setAttribute('width', '350px');
    image.setAttribute('height', '300px');
    
    
    modal.appendChild(name);
    modal.appendChild(origin);
    modal.appendChild(recipe);
    modal.appendChild(health_benefits);

    
  
    card.appendChild(image);
    card.appendChild(button);
    card.appendChild(modal);

    
    
    document.querySelector('.foreign').appendChild(card);
    });
}

