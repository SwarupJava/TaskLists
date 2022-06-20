var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function () {
        var details = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            details[_i] = arguments[_i];
        }
        for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
            var item = details_1[_a];
            console.log(item);
        }
    };
    return Product;
}());
var obj = new Product();
obj.Print("TV", 45000.44, true);
//npm init -y
//tsc index.ts
//node index.js
