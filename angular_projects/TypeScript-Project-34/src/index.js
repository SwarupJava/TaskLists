var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (obj) {
        for (var property in obj) {
            console.log("".concat(property, " : ").concat(obj[property]));
        }
    };
    return Product;
}());
var obj = new Product();
obj.Print({ Name: "TV", Price: 45600.33, Stock: true });
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-34>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-34\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-34\src>node index.js
