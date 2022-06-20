var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.GetProduct = function () {
        return { Name: "TV", Price: 34000.34, Stock: true };
    };
    Product.prototype.GetProducts = function () {
        return [{ Name: "TV", Price: 35000.34, Stock: true }, { Name: "TV", Price: 25000.34, Stock: true }];
    };
    return Product;
}());
var obj = new Product();
for (var property in obj.GetProduct()) {
    console.log(property + ":" + obj.GetProduct()[property]);
}
for (var _i = 0, _a = obj.GetProducts(); _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item.Name + "-" + item.Price);
}
//npm init -y
//tsc index.ts
//node index.js
