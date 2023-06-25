///<reference path="../templates/ProductTemplate.ts"/>

import template = ShoppingProject.Templates;
namespace ShoppingProject {
    export namespace Components  {
        export class ProductComponent extends template.ProductTemplate {
             Name = "Samsung TV";
             Price = 56000.44;
             Qty = 2;
             Total() {
                 return this.Qty * this.Price;
             }
             Print() {
                console.log(`Name = ${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`) 
             }
        }
    }
}