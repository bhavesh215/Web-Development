//var n=prompt("Enter the number");

// for loop

/* for(let i=1;i<=10;i++){
    console.log(i*n);
}*/

// while loop

/* let i=1;
    while(i<=10){
    console.log(i*n);
    i++;
} */

// do while loop

/* let i=1;
do{
console.log(i*n);
i++;
}while(i<=10); */

// for in loop

/* for in using objects
let person={
name: 'Bhavesh Uttawani',
education: 'B.Tech Pursuing',
age: 21,
mobile: 9529556767
}

for(let key in person){
console.log(key,person[key]);
}

*/

// Arrays

let names=['Bhavesh','Shalini','Rudra','Rohit'];

/* for in loop
for(let index in names){
console.log(index,names[index]);
}
*/

// for of loop

for(let name of names){
console.log(name);
}