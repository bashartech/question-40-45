// Question 40

type Album = String

function make_album(name:string,title:string):Album{
    return (`${name},${title}`)
}

const album1 = make_album("First Name","First Album")
const album2 = make_album("Seecond Name","Seecond Album")
const album3 = make_album("Third Name"," Third Album")

console.log(album1);
console.log(album2);
console.log(album3);

// Question 41

let magician_names = ["Saad","Billgates","Niel Arm Stong"]

function show_magicians(magician_names:string[]){
    magician_names.forEach(magician_names => {
        console.log(magician_names);
        
    });
}
show_magicians(magician_names)
// Question 42

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magician_names); // Modifies the original array
show_magicians(magician_names); // Shows modified names

// question 43

let magician_name = ["Saad","Billgates","Niel Arm Stong"]
function make_gret(magician_name:string[]){
    magician_name.forEach(magician_name=>{
        console.log(magician_name);
        
    })
}
make_gret(magician_name)
show_magicians(magician_names)

// question 44


function sandwitch(food:string[]){
    return (` Making Sandwich Fresh include ${food} `)
}
console.log(sandwitch(["Club","Cold drink"]));
console.log(sandwitch(["Chicken ","Cold drink"]));
console.log(sandwitch(["Beef","Cold drink"]));

// question 45

function carInformation(manufactureName:string,modelName:string,options:string[]){

    const carInfo = {manufactureName , modelName,options}
    return carInfo
}
console.log(carInformation("Toyota","V8",["Black In color","Engine Is New"]));


