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








//Properties

//npm index.ts
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26\src>node index.js
