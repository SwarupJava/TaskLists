interface IProduct {
    Name : string;
    Price : number;
    Qty : number;
    Total() : number;
    Print() : void;
}
abstract class ProductTemplate implements IProduct {
    public Name = "";
    public Price = 0;
    public Qty = 0;
    public abstract Total() : number;
    public abstract Print() : void;
}
class ProductComponent extends ProductTemplate {
    Name : "Samsung TV";
    Price : 56000.44;
    Qty : 2;
    Total() : number{
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
        //console.log(`Name=${this.Name}`);
    }
}
let app = new ProductComponent();
//app.Name = "LG LED TV"; //it is giving error
app.Print();