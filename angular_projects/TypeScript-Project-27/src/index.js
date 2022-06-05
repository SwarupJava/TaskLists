var username = prompt("Enter User Name");
var password = prompt("Enter Password");
var productname = prompt("Enter Product Name");
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (newValue) {
            if (username == "john" && password == "john@11") {
                this._productName = newValue;
            }
            else {
                document.write("Unauthorized: You can't set product Name");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var obj = new Product();
obj.ProductName = productname; // setter
if (obj.ProductName) {
    document.write("Product Name : ".concat(obj.ProductName));
}
