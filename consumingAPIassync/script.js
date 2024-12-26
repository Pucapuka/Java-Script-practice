let container = document.getElementById('container');


async function getData(){
    
    const url = 'https://api.sampleapis.com/coffee/hot';
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Fetch error!`);
        }
        const data = await response.json();
        console.log(data);
        
        data.forEach(coffee => {
            const coffeeElement = document.createElement('div');
            coffeeElement.classList.add('coffee-item');
        
            //Title
            const coffeeTitle = document.createElement('h3');
            coffeeTitle.classList.add('text-content');
            coffeeTitle.contentEditable = true;
            coffeeTitle.textContent = coffee.title;
        
            //Description
            const coffeeDescription = document.createElement('p');
            coffeeDescription.classList.add('text-content');
            coffeeDescription.contentEditable = true;
            coffeeDescription.textContent = coffee.description;
        
            //Ingredients
            const coffeeIngredients = document.createElement('p');
            coffeeIngredients.classList.add('text-content');
            coffeeIngredients.contentEditable = true;
            coffeeIngredients.textContent = `Ingredients: ${coffee.ingredients.join(', ')}`;
        
            //image
            const coffeeImage = document.createElement('img');
            coffeeImage.classList.add('coffee-image');
            coffeeImage.src = coffee.image;
            coffeeImage.alt = coffee.title;
            
            coffeeElement.appendChild(coffeeTitle);
            coffeeElement.appendChild(coffeeDescription);
            coffeeElement.appendChild(coffeeIngredients);
            coffeeElement.appendChild(coffeeImage);
            
            container.appendChild(coffeeElement);
        });
        
    }catch(error){
        console.error(`Error: ${error.message}`);
        container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
    
}

getData();