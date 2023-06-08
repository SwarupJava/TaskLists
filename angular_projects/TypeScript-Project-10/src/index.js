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
//data type should be any in typescript
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-10>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-10\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-10\src>node index.js
