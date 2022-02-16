// Finding ones place digit in a number
function onesplacedigit(a){
    return a%10;
}

console.log(onesplacedigit(26923));

// Finding tens place digit in a number
function tensplacedigit(a){
    return (a%100-a%10)/10;
}

console.log(tensplacedigit(29475));

// Roundoff to nearest integer
function round(a){
    return Math.round(a);
}

console.log(round(12.768));

// Roundoff to nearest tens
function round10(a){
    if(a<10){
        if(a<5){
            return 0;
        }
        else{
            return 10;
        }
    }
    else{
        let c=round(a/10);
        return c*10;
    }
}

console.log(round10(577));

// Roundoff to nearest hundreds
function round100(a){
    if(a<100){
        if(a<50){
            return 0;
        }
        else{
            return 100;
        }
    }
    else{
        let c=round(a/100);
        return c*100;
    }
}

console.log(round100(4649));