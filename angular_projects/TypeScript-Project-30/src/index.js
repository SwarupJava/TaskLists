var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (Name, Price, Stock) {
        console.log("Name=".concat(Name, "\nPrice=").concat(Price, "\nStock=").concat(Stock));
    };
    return Product;
}());
var obj = new Product();
obj.Print("TV", 35000.30, true);
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-30\src>node index.js
