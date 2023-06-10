var Name = "Samsung TV";
var Product = /** @class */ (function () {
    function Product() {
        this.Price = 45000.44;
    }
    Product.prototype.Print = function () {
        console.log("Name=".concat(Name, "\nPrice=").concat(this.Price));
    };
    return Product;
}());
var obj = new Product();
obj.Price = 67000.44;
obj.Print();
//Properties
//npm index.ts
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-26\src>node index.js
