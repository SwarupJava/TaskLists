var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            console.log(item);
        }
    };
    return Product;
}());
var obj = new Product();
obj.Print(["TV", "Mobile", "Watch"]);
//npm init -y
//tsc index.ts
//node index.js
