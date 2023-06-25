///<reference path="../contracts/ProductContract.ts" />

import contract = ShoppingProject.Contracts;
namespace ShoppingProject {
    export namespace Templates{
        export abstract class ProductTemplate implements contract.ProductContract {
              public Name : string = "";
              public Price: number = 0;
              public Qty: number = 0;
              public abstract Total(): number;
              public abstract Print(): void;
        }
    }
}