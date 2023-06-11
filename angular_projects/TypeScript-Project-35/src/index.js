var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            console.log(item.Name);
        }
    };
    return Product;
}());
var obj = new Product();
obj.Print([{ Name: "TV" }, { Name: "Mobile" }]);
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35\src>node index.js
