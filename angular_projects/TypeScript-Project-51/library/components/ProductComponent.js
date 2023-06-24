"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ProductComponet = void 0;
var ProductTemplate_1 = require("../templates/ProductTemplate");
var ProductComponet = /** @class */ (function (_super) {
    __extends(ProductComponet, _super);
    function ProductComponet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 45000.44;
        _this.Qty = 2;
        return _this;
    }
    ProductComponet.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponet.prototype.Print = function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nQty=").concat(this.Qty, "\nTotal=").concat(this.Total()));
    };
    return ProductComponet;
}(ProductTemplate_1.ProductTemplate));
exports.ProductComponet = ProductComponet;
