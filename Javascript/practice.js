// Finding occurence of Another string in a String irrespective of case sensitive

function indexOfIgnoreCase(a,b){
    let s1=a.toLowerCase();
    let s2=b.toLowerCase();
    return s1.indexOf(s2);
}

console.log(indexOfIgnoreCase('Cooperation','operation'));


// Finding second occurence of Another string in a String irrespective of case sensitive

function secondIndexOf(a,b){
    let s1=a.toLowerCase();
    let s2=b.toLowerCase();
    return s1.indexOf(s2,(s1.indexOf(s2)+1));
}

console.log(secondIndexOf('Shalini Shekhawat','ha'));

/* second occurence find krne ke case me ham indexOf method me do attributes/parameters use honge pehla attribute/parameter to string hogi jo search krni hai aur dusra parameter number hoga jahaan se search start hogi aur is second occurence wale case me ham first occurence ke index me 1 add krke wahaan se search start krwaenge */

// Finding first word in a statement 

function firstWord(a){
    let n=a.indexOf(' ');
    return a.substr(0,n);
}
console.log(firstWord('Hello Everyone I am Bhavesh Uttawani '));


// Replacing all the occurence of a substring with another substring in a string

function replaceAll(a,b,ab){
    while(a.indexOf(b)!=-1){
        a= a.replace(b,ab);
    }
    return a;
}

console.log(replaceAll('motherboard','b','c'));

