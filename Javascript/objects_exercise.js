function Product(title,pr,dis,ic){
    this.productname = title,
    this.cost = pr-dis,
    this.icode = ic
}
const grocery1 = new Product('Sugar',43,2,'#12');
console.log(grocery1);

function fruit(title,price){
    return{
        fruit_name:title,
        fruit_price : price
    }
}
const fruit1 = fruit('Mango','Rs 50 per kg');
console.log(fruit1);