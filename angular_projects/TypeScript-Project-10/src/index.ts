let product:any = {
    "Name" : "SAMSUNG TV",
    "Price" : 45600.44,
    "Qty" : "2",
    "Total" : function(){
        return this.Qty * this.Price;
    },
    "Print":function(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }


}

product.Name = "Samsung LED TV";
product.Print();




//npm init -y
//tsc index.ts
//node index.js
//data type should be any in typescript