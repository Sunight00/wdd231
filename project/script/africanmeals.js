const urls = "https://sunight00.github.io/wdd231/project/data/africanmeals.json"

async function Meals() {
    try{
        const response = await fetch(urls);
        if (response.ok) {
            const data = await response.json();
        const meals = data.dishes;
        create(meals);
        }
        else {
            throw new TypeError(await response.text());}
    } 
    catch (error) 
    {
        console.error(error);
    }
      
    }


    Meals();



    function create(dish)
    {   
        dish.forEach(dishes => {
       
        let card = document.createElement('section');
        card.setAttribute('id', dishes.id);
        let name = document.createElement('h2');
        name.setAttribute("class",dishes.class)
        let origin = document.createElement('p');
        origin.setAttribute("class",dishes.class1)
        let recipe = document.createElement('p');
        recipe.setAttribute("class",dishes.class2)  
        let health_benefits = document.createElement('p');
        health_benefits.setAttribute("class",dishes.class3)
        let image = document.createElement('img');
        
        name.innerHTML = dishes.name;
        origin.innerHTML =`ORIGIN: ${dishes.origin}`;
        recipe.innerHTML =`RECIPE: ${dishes.recipe}`;
        health_benefits.innerHTML =`HEALTH BENEFITS: ${dishes.health_benefit}`;
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
    
        document.querySelector('.african').appendChild(card);
        
        });
    }