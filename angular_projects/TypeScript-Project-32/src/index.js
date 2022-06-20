var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Print = function (Name, Price) {
        if (Price == undefined) {
            console.log("Name=".concat(Name));
        }
        else {
            console.log("Name=".concat(Name, "\nPrice=").concat(Price));
        }
    };
    return Product;
}());
var obj = new Product();
obj.Print("TV");
//obj.Print("TV", 35000.30);
//npm init -y
//tsc index.ts
//node index.js
//choose anyone [obj.Print("TV") or obj.Print("TV", 35000.30)]
