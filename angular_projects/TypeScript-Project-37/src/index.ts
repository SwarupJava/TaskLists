class Product{
    public Print(...details):void{
        for(var item of details){
            console.log(item);
        }
    }
}
let obj = new Product();
obj.Print("TV", 45000.44, true);





//npm init -y
//tsc index.ts
//node index.js