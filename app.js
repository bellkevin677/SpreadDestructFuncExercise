const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
]

function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

console.log("===============");

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log("===============");

const jurassicParkMovies = 
[
    {
    one: "Jurassic Park", 
    two: "The Lost World: Jurassic Park", 
    three: "Jurassic Park III"
    }, 
    {
    four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom"
    }
]
function seeJPMovies([{one, two, three}, {four, five}]){
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
}

seeJPMovies(jurassicParkMovies);