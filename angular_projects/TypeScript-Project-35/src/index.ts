class Product{
    public Print(data:any[]){
       for(var item of data){
        console.log(item.Name);
       }
    }
}
let obj = new Product();
obj.Print([{Name:"TV"}, {Name:"Mobile"}]);



//npm init -y
//tsc index.ts
//node index.js