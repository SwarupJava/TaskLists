class Database{
    constructor(dbName : String){
        console.log(`Connected to ${dbName} Database`);
    }
    public Insert() : void {
        console.log("Record Inserted");
    }
    public Delete() : void {
        console.log("Record Deleted")
    }
}
let obj = new Database("Oracle");
obj.Insert();


//parameter pass to constructor

//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-40\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-40\src>node index.js