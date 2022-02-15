// Objects

let person={
    name: "Bhavesh Uttawani",
    age: 21,
    education: 'B.Tech'
}

console.log(person);

//Access of a particular property of object

//Dot Notation
console.log(person.name);

//Bracket Notation
console.log(person["age"]);


// Arrays

let favStocks = ["Tata Steel" , "Infosys" , "Wipro"];

console.log(favStocks);

//Access of a particular array element

console.log(favStocks[1]);


// Functions

function table(a){
    for(var i=1;i<=10;i++){
        console.log(a*i);
    }
}
table(55);