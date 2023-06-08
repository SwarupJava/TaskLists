interface IProduct
{
    Name:string;
    readonly Price:number;
    Stock:boolean;
}
let tv:IProduct = {
    "Name": "Samsung TV",
    "Price": 45000.44,
    "Stock": true,
}
tv.Name = "LG LED TV";
//tv.Price = 60000.44;






//readonly example

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-18>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-18\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-18\src>node index.js
