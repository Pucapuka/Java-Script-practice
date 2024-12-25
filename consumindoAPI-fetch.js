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
