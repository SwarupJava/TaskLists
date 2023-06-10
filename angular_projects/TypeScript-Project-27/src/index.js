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
    document.write("Product Name : ".concat(obj.ProductName)); //getter
}
//npm init -y
//tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27\src>tsc index.ts
/*
D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27\src>tsc index.ts
index.ts:8:8 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

8    get ProductName(){
         ~~~~~~~~~~~

index.ts:11:8 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

11    set ProductName(newValue) {
          ~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:8
*/
//no worry
//you can continue
//go to index.html
