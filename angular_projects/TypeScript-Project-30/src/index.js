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
