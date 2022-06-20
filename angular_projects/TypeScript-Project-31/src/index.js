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
