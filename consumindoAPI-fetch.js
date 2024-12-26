const dataField = document.getElementById('data-field');
const url = "https://api.sampleapis.com/coffee/hot";

fetch(url)
.then(response => {

    if(!response.ok){
        throw new Error(`Error fetching data. Status: ${response.status}`);
    }
    return response.json();
    
})
.then(data => {
    
    console.log(data);
    let content = '';
    
    for(let index in data){
        content += `
            <h3>Title: ${data[index].title}</h3>
            <p>Description: ${data[index].description}<p>
            <p>Ingredients: ${data[index].ingredients.join(',')}</p>
            <img src='${data[index].image}' alt='${data[index].title}' style="width:500px; height: 500px;">
        `;
    }
    
    dataField.innerHTML = content;
})
.catch(error => {
    console.error(`Error: ${error}`);
})


/*
Another way that can be done, manipulating DOM, is the one below:

const url = 'https://api.sampleapis.com/coffee/hot';
let container = document.getElementById('container');
fetch(url)
    .then(function(response){
        if(!response.ok){
            throw new Error("Fetch error!");
        }
        return response.json();
    }).then(function(data){
        console.log(data);
        
        data.forEach(coffee => {
            const title = document.createElement('h3');
            title.classList.add('text-content');
            title.textContent = coffee.title;
            
            const description = document.createElement('p');
            description.classList.add('text-content');
            description.textContent = coffee.description;
            
            const ingredients = document.createElement('p');
            ingredients.classList.add('text-content');
            ingredients.textContent = `Igredients: ${coffee.ingredients}`;
            
            const image = document.createElement('img');
            image.classList.add('image');
            image.src = coffee.image;
            image.alt = coffee.title;
            
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(ingredients);
            container.appendChild(image);
        });
    }).catch(function(error){
        console.error(`Error: ${error.message}`);
        container.innerHTML = `Error: No content available.`;
    });
    
    
*/
