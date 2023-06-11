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

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-35\src>node index.js