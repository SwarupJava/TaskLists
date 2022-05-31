let Name : string = "Samsung TV";

class Product {
    public Price:number = 45000.44;
    Print(){
        console.log(`Name=${Name}\nPrice=${this.Price}`);
    }
}

let obj = new Product();
obj.Price = 67000.44;
obj.Print();








//npm index.ts
//tsc index.ts
//node index.js
//Properties