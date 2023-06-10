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
    document.write(`Product Name : ${obj.ProductName}`);//getter
}








//npm init -y
//tsc index.ts



//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27\src>tsc index.ts
/*
D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-27\src>tsc index.ts
index.ts:8:8 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

8    get ProductName(){
         ~~~~~~~~~~~

index.ts:11:8 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

11    set ProductName(newValue) {
          ~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:8
*/
//no worry
//you can continue
//go to index.html