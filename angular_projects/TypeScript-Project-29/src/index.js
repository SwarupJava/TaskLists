var Product = /** @class */ (function () {
    function Product() {
        this.Name = "Samsung TV";
        this.Price = 45000.44;
        this.Qty = 2;
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return Product;
}());
var tv = new Product();
tv.Print();
//tsc index.ts
//node index.js
