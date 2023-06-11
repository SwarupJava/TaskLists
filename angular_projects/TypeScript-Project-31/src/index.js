var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (Name, Price) {
        console.log("Name=".concat(Name, "\nPrice=").concat(Price));
    };
    return Product;
}());
var obj = new Product();
obj.Print("TV");
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-31>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-31\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-31\src>node index.js
