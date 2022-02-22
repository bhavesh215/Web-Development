// the scope is by default global
var name='Bhavesh';

function sayName(){
    var marks=24;
    console.log(name);
}

sayName();
//console.log(marks);


// Important Point 

/* Agr hamne koi variable bna rkha hai global scope me aur phir us variable ko kisi curly brace wale block me change kr diya to uski value global me bhi change ho jayegi jbki agr let keyword hai to nhi hoga ye */

/*
let c=10;
var i=0;
console.log(i);
for( i=2;i<c;i++){
    if(c%i==0){
        console.log("Composite");
        break;
    }
}
console.log(i);
*/

// Block Scope me hamesha let aur const hi acha rehta na ki var

