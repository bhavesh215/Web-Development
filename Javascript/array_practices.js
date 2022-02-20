const characters =[
    {
        name:'Tarak Mehta',
        height:172,
        mass: 77,
        eye_color: 'brown',
        gender: 'male'
    },
    {
        name:'Jethalal',
        height:145,
        mass: 136,
        eye_color: 'black',
        gender: 'male'
    },
    {
        name:'Babita Ji',
        height:150,
        mass: 49,
        eye_color: 'grey',
        gender: 'female'
    },
    {
        name:'Krishnan Iyer',
        height:168,
        mass: 84,
        eye_color: 'black',
        gender: 'male'
    },
];

//Get an array of all names

console.log(characters.map(element=> element.name));

// Get an array of objects with just name and height properties

console.log(characters.map(element => {
return {name : element.name, height: element.height};
}));

// Get total height of all characters
console.log(characters.reduce((prevHeight,character) =>{
    return prevHeight+character.height;
},0));

// Get all characters with mass greater than 100
console.log(characters.filter(element=>{
    return element.mass>100;
}));

// Get all male characters
console.log(characters.filter((element)=>{
    return element.gender ==='male';
}));

// Sort by gender 
console.log(characters.sort((a,b)=>{
    if (a.gender < b.gender) {
        return -1;
    }
    if (a.gender > b.gender) {
        return 1;
    }
}));

// Sort by name
console.log(characters.sort((a,b)=>{
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
}));