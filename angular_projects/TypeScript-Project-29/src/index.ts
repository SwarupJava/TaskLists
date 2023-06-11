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






//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-29>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-29\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-29\src>node index.js