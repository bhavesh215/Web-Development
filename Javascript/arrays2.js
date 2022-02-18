const names= new Array('Vishandas','Pooja','Bhavesh','Rohit','Lokesh','Shalini', 'Shalini');
console.log(names);

// LastIndexof Method : It is used to find index of last occurence of element in  array if it exists in array otherwise it returns -1
console.log(names.lastIndexOf('Shalini'));

// Includes Method : It is used to check whether a value is present in array as its a element or not
console.log(names.includes('Rohit'));
console.log(names.includes('Rohit',4));

// line 6  returns false whereas line 5  returns true just because in line 6 code  includes method contained two arguments first one is the value which we want to check and second argument is the index fromwhere we want to start our search
// This two argument in include method also works for indexOf method and for lastindexOf method 

let channels = [{
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
}]

//Find Method : Include method only works in case of arrays of primitive data-types so we need a different method . This method returns  a object incase of array of objects if property which is searched  is exist for any object otherwise return undefined;
console.log(channels.find(function(element){
    return element.name==='Apna College';
}))

//Arrow Function : It is way of declaring a function without using function keyword 

// Find Method using arrow function
console.log(channels.find((element)=>{
    return element.content ==='Politics';
}))

// Concat method: This method is used to add a new element in end of  copy of existing array without affecting old array
const copy=channels.concat({
    name: 'Kreatyx',
    content: 'EE'
});
console.log(copy.slice(1,3));
console.log(copy);

// Spread Operator (Triple dot operator): This method is used to do same work which is done by concat method without affecting old array
const copy2=[...channels,...[{name:'Unacademy',content: 'GATE EE'}]];
console.log(copy2);

