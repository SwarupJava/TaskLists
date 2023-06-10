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







//access modifers in class

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-25>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-25\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-25\src>node index.js
