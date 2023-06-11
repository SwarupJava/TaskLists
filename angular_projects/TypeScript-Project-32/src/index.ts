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
//obj.Print("TV");
obj.Print("TV", 45000.44);






//choose anyone [obj.Print("TV") or obj.Print("TV", 45000.44)]

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-32>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-32\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-32\src>node index.js
