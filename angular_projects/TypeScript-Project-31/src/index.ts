class Product{
    public Print(Name:string, Price?:number){
       console.log(`Name=${Name}\nPrice=${Price}`);
    }
}
let obj = new Product();
obj.Print("TV");

//npm init -y
//tsc index.ts
//node index.js