class Product{
    public Print(obj:any){
       for(var property in obj){
          console.log(`${property} : ${obj[property]}`);
       }
    }
}
let obj = new Product();
obj.Print({Name : "TV", Price : 45600.33, Stock : true});






//npm init -y
//tsc index.ts
//node index.js