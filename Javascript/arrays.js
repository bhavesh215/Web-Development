// Arrays : Array is a reference data type which is a list of different variables of same data type like array of numbers , array of strings etc

// Declaring a Array
const a = [49,47,21,18,12];
console.log(a);

// Access a particular element in array using index 
console.log(a[2]);

//Length method
console.log(a.length);
console.log(a[a.length-1]);

//Declaring a Array using objects
const b= new Array('5th Pass','8th pass','12th pass','11th pass','6th pass');

//Push Method : It is used to add a new element at the end of existing array
a.push(20);

//Unshift Method : It is used to add a new element at the beginning of existing array
a.unshift(52);

//Pop Method : It is used to delete a element from the end of existing array
a.pop();

//Shift Method : It is used to delete a element from the beginning of existing array
a.shift();

// Modifying a element of array 
a[0]=50;

const names=['Vishandas','Pooja Devi','Bhavesh','Rohit','Lokesh'];

//IndexOf Method : It is used to find index of first occurence of element in  array if it exists in array otherwise it returns -1
console.log(names.indexOf('Bhavesh'));
console.log(names.indexOf('Rahul'));

//LastIndexof Method: It is used to find index of last occurence of element in  array if it exists in array otherwise it returns -1