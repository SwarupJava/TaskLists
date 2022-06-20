class Product{
    public Print(list:string[]){
        for(var item of list){
            console.log(item);
        }
    }
}
let obj = new Product();
obj.Print(["TV", "Mobile", "Watch"]);


//npm init -y
//tsc index.ts
//node index.js