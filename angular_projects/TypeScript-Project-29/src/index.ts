class Product{
    public Name:string = "Samsung TV";
    public Price:number = 45000.44;
    public Qty:number = 2;
    public Total():number {
        return this.Qty * this.Price;
    }

    public Print():void {
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`)
    }
}
let tv = new Product();
tv.Print();

//tsc index.ts
//node index.js