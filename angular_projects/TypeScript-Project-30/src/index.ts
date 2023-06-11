class Product{
    public Print(Name:string, Price:Number, Stock:boolean){
        console.log(`Name=${Name}\nPrice=${Price}\nStock=${Stock}`);
    }
}
let obj = new Product();
obj.Print("TV", 35000.30, true);




//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30\src>node index.js
