interface IProduct
{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print?():void;
}
let tv:IProduct = {
    "Name": "Samsung TV",
    "Price": 45000.44,
    "Qty": 2,
    "Total": function(){
        return this.Qty * this.Price;
    },
    "Print": function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}
tv.Print();





//rules for methods

//npm init y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19\src>node index.js
