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


// Does every character have mass more than 40?
console.log(characters.every(element=> element.mass >40));

// Does every character have blue eyes?
console.log(characters.every(element=> element.eye_color==='blue'));

// Is there at least one male character
console.log(characters.some(element=> element.gender==='male'));

// Is there at least one character taller than 200?
console.log(characters.some(element=> element.height>200));