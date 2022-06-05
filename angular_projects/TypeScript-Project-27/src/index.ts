let username:string = prompt("Enter User Name");
let password:string = prompt("Enter Password");
let productname:string = prompt("Enter Product Name");
class Product
{
   public _productName:string;

   get ProductName(){
       return this._productName;
   }
   set ProductName(newValue) {
       if(username=="john" && password=="john@11")
       {
        this._productName = newValue;
       } else {
           document.write("Unauthorized: You can't set product Name");
       }
   }
}
let obj = new Product();
obj.ProductName = productname;  // setter
if(obj.ProductName){
    document.write(`Product Name : ${obj.ProductName}`);
}



//npm init -y
//tsc index.ts
