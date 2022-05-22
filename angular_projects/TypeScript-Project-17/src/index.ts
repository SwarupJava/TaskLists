interface IProduct {
    Name:string;
    Price:number;
    Stock:boolean;
    Rating?:number
}

let tv:IProduct = {
    "Name" : "Samsung TV",
    "Price" : 45000.44,
    "Stock" : true
}






//npm init -y
//tsc index.ts
//node index.js
//optional classes