const url = "https://jsonplaceholder.typicode.com/posts";
const dados= document.getElementById("script-data");

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Erro ao buscar dados");
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
        
        let content = '';
        
        for(let index in data){
            content += `
                <div>
                    <h3>Id: ${data[index].id}<h3>
                    <h3>Título: ${data[index].title}</h3>
                    <p>Corpo: ${data[index].body}</p>
                </div>
                <hr>
            `
        }
            dados.innerHTML = content;
    })
    .catch(e => {
        console.error('Erro: ', e);
    })
