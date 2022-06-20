interface IProduct{
    Name : string,
    Price : number,
    Stock :boolean
}

class Product{
    public GetProduct():IProduct{
        return {Name:"TV", Price:34000.34, Stock:true};
    }
    public GetProducts():IProduct[]{
        return [{Name:"TV", Price:35000.34, Stock:true}, {Name:"TV", Price:25000.34, Stock:true}];
    }
}
let obj = new Product();
for(var property in obj.GetProduct()){
  console.log(property + ":" + obj.GetProduct()[property]);
}
for(var item of obj.GetProducts()){
    console.log(item.Name + "-" + item.Price);
}





//npm init -y
//tsc index.ts
//node index.js