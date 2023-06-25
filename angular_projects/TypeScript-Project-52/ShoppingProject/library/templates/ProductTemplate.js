///<reference path="../contracts/ProductContract.ts" />
var ShoppingProject;
(function (ShoppingProject) {
    var Templates;
    (function (Templates) {
        var ProductTemplate = /** @class */ (function () {
            function ProductTemplate() {
                this.Name = "";
                this.Price = 0;
                this.Qty = 0;
            }
            return ProductTemplate;
        }());
        Templates.ProductTemplate = ProductTemplate;
    })(Templates = ShoppingProject.Templates || (ShoppingProject.Templates = {}));
})(ShoppingProject || (ShoppingProject = {}));
