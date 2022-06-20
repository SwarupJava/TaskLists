class Product{
    public Print(Name:string, Price?:number){
         if(Price==undefined){
            console.log(`Name=${Name}`);
         } else {
            console.log(`Name=${Name}\nPrice=${Price}`)
         }
    }
}

let obj = new Product();
obj.Print("TV");
//obj.Print("TV", 35000.30);


//npm init -y
//tsc index.ts
//node index.js
//choose anyone [obj.Print("TV") or obj.Print("TV", 35000.30)]