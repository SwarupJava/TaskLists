var Product = /** @class */ (function () {
    function Product() {
        this.Name = "TV";
        this.Price = 34000;
        this.Rating = {
            Rate: 4.3,
            Count: 4600
        };
    }
    Object.defineProperty(Product.prototype, "Rate", {
        get: function () {
            return this.Rating.rate;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var obj = new Product();
obj.Rate; //accessor
obj.Rating.Rate; // without accessor
//tsc index.ts
