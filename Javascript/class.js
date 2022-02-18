//Declaring a Class

class Animal{
    constructor(name,type,legs,eat){
        this.name= name;
        this.type=type;
        this.eat=eat;
        this.legs=legs;
    }
}

const animal1=new Animal('Dog','Domestic',4,'omnivore');
const animal2=new Animal('Lion','Wild',4,'carnivore');

//Class Expressions

/* const Bird= class Animal{
    constructor(name,type,legs,eat){
        this.name= name;
        this.type=type;
        this.eat=eat;
        this.legs=legs;
    }
}

let bird1 = new Bird('Ostrich','wild',2,'carnivore'); */

// Getter vs Setter

class Product{
    constructor(name,material,price,discount){
        this.name=name;
        this.material=material;
        this.price=price;
        this.discount=discount;
    }
    get getPrice(){
        return this.price;
    }
    set setDiscount(value){
        this.discount = value;
    }
}
let chair= new Product('chair','wood',499,12);