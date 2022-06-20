class Product{
    public Print(Name:string, Price:Number, Stock:boolean){
        console.log(`Name=${Name}\nPrice=${Price}\nStock=${Stock}`);
    }
}
let obj = new Product();
obj.Print("TV", 35000.30, true);


//npm init -y
//tsc index.ts
//node index.js
