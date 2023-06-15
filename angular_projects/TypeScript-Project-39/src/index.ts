class Database {
     constructor(){
        console.log("Connected to Database");
     }
     public Insert():void{
        console.log("Record Inserted");
     }
     public Delete():void{
        console.log("Record Deleted");
     }
}
let oracle = new Database();
oracle.Insert();



//folder created in respective path
//open folder[File->Open Folder...]
//npm init -y
//means
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-39>npm init -y
//package.json created
//click on project(square bracket will be visible)
//click -> New Folder...
//create src folder
//click on src(square bracket will be visible)
//click -> New File...


//EMPTY CONSTRUCTOR
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-39\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-39\src>node index.js