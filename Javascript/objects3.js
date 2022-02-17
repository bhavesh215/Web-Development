// In JS Everything is a object either it is a primitive data type or it is a reference data type
// Primitive Data type object which is declared with const keyword are immutable where reference data type object which is declared with const keyword are mutable

//Primitive Data type

let number=12;
//Pass by Value
let number2=number;
number = 17;


/* console.log(number);
console.log(number2); */

//Reference Datatype
let obj= {number: 10};
//Pass by Reference 
let obj2 = obj;

obj.number=19;

/* console.log(obj);
console.log(obj2);*/

//Pass by value in objects
const pet ={
    name: 'Dog',
    legs: 4
}

const pet2= {...pet};

console.log(pet);
console.log(pet2);

pet.name='Cat';

console.log(pet);
console.log(pet2);

// Important Important Important

/* Agar ham kisi variable chhahe woh normal primitive ho ya reference to agr ham us variable ki ek copy bnaenge pass by reference se  aur uske baad agr ham us variable me kch change krenge to wohi change uski carbon copy me bhi dikhe ga jbki pass by value ke case me sirf original change hoga */

// Loops in JS

for(let key in pet){
    console.log(key,pet[key]);
}
for(let item of Object.values(pet2)){
    console.log(item);
}

// for in loop me ham keys pass krte hai jbki for of loop ka use krte waqt hame Object naam ke ek object ki property ke taur pe use hoga
