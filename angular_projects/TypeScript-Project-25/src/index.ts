class Product {
    public Name:string;
    private Price:number;
    protected Stcok:boolean;
    Print(){
        console.log(`${this.Name}\n${this.Price}\n${this.Stcok}`)
    }
}
class Derived extends Product{
    Print(){
        let obj = new Derived();
        obj.Name;
        obj.Stcok;
    }
}
let obj = new Derived();
obj.Name;
let obj1 = new Product();
obj1.Name;







//npm init -y
//tsc index.ts
//node index.js
//access modifers in class