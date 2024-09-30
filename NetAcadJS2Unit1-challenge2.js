//
// 
// 
//The Scream (Edvard Munch, 1893), 
//Guernica (Pablo Picasso, 1937), 
//The Kiss (Gustav Klimt, 1907), 
//Girl With a Pearl Earring (Johannes Vermeer, 1665), 
//The Birth of Venus (Sandro Botticelli, 1485), 
//Las Meninas (Diego Velázquez, 1656), 
//The Creation of Adam (Michelangelo, 1512).

function getImage(imageList){
    let counter = 0;
    return imageList.map((image) => {
        counter ++;
         return  "\nImage " + counter +
                 "\n name: " + image.name +
                 "\n year: " + image.year +
                 "\n author: " + image.author;
                 }).join('\n\n');
    
}

function Image(name, year, author){
    this.name = name;
    this. year = year;
    this.author = author;
}

let imageList = [];
let image1 = new Image("Mona Lisa", 1503, "Leonardo da Vinci");
imageList.push(image1);
let image2 = new Image("The Last Supper", 1495, "Leonardo da Vinci");

imageList.push(image2);
let image3 = new Image("Starry Night", 1889, "Vincent van Gogh");
imageList.push(image3);
images = getImage(imageList);
console.log(images);

