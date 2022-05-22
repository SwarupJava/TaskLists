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



//npm init y
//tsc index.ts
//node index.js
//rules for methods