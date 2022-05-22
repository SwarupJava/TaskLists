var tv = {
    "Name": "Samsung TV",
    "Price": 45000.44,
    "Qty": 2,
    "Total": function () {
        return this.Qty * this.Price;
    },
    "Print": function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    }
};
tv.Print();
//npm init y
//tsc index.ts
//node index.js
//rules for methods
