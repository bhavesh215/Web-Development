const names= new Array('Vishandas','Pooja','Bhavesh','Rohit','Lokesh','Shalini', 'Shalini');

//For Loop
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//For of loop
for(let name of names){
    console.log(name);
}

//for-each method
names.forEach(function(name,index){
    console.log(name,index);
})

//Join 
let rajputani = ['S','h','a','l','i','n','i']
console.log(rajputani.join());
rajputani=rajputani.join('');

//Split
console.log(rajputani.split(''));

let favPlaylists = [{
    name: 'Apna College',
    content: 'Coding and Software Development'
},
{
    name: 'Lallantop',
    content: 'Politics'
},
{
    name: 'Tutorial Point Pvt Ltd',
    content: 'Personality Development'
},
{
    name: 'Pradhan Mantri Series',
    content: 'Politics'
}]

//filter method : Filter method is used to find all the occurences of a particular element in array
console.log(favPlaylists.filter( element=> {
    return element.content === 'Politics';
}));

let classResult = [
    {
        name: 'Rajesh',
        marks: 23
    },
    {
        name: 'Suresh',
        marks: 14
    },
    {
        name: 'Ramesh',
        marks: 34
    },
    {
        name: 'Lokesh',
        marks: 44
    }
]

//Map Method :
console.log(classResult.map(element=>{
    return element.marks*2;
}))