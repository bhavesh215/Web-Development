/*
let counter ={
    count: 0,
    increment: function(){
        counter.count++;
    }
}
counter.increment();
console.log(counter);

let counter= createCounter();
let counter1= createCounter();

/*
function createCounter(){
    return{
        count:0,
        increment : function(){
            counter.count++;
        }
    }
}

function createCounter(){
    return{
        count:0,
        increment : function(){
            this.count++;
        }
    }
}
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1);



var count=0;
function incrementCounter(){
    this.count++;
    console.log(this);
}
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
console.log(count);
*/
console.log(this); 

function Car(name,price,mode){
    this.name=name;
    this.price=price;
    console.log(this);
}

let car1=new Car('Hyundai Swift','Rs 6 Lakhs');
console.log(car1);