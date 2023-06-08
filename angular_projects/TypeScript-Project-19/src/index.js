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
//rules for methods
//npm init y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-19\src>node index.js
