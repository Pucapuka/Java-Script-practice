class Images {
    
    constructor(){
        this.imageList = [];
    }
    
    
    add(title, author, year){
        this.imageList.push({title, author, year});
    }
    
    show(){
        if(this.imageList.length !== 0){
            this.imageList.forEach((image) =>{
                console.log(`${image.title} (${image.author}, ${image.year})`);
            });
        }else{
            console.log("No image to show.");
        }
    }
    
    clear(){
        this.imageList = [];
        console.log("List is clear!");
    }
    
    edit(title, author, year){
        for (let image of this.imageList){
            if(title === image.title){
                image.author = author;
                image.year = year;
            } 
        }
    }
    
     delete(title){
        this.imageList = this.imageList.filter((image) => image.title !== title);
            } 
 
}

let images = new Images();


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)