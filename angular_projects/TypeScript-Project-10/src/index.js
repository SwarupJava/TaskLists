var product = {
    "Name": "SAMSUNG TV",
    "Price": 45600.44,
    "Qty": "2",
    "Total": function () {
        return this.Qty * this.Price;
    },
    "Print": function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
product.Name = "Samsung LED TV";
product.Print();
//npm init -y
//tsc index.ts
//node index.js
//data type should be any in typescript
