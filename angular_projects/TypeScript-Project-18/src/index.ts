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


//npm init -y
//tsc index.ts
//node index.js
//readonly example