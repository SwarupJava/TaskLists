class Base {
    constructor(){
        console.log("Base class constructor called");
    }
}

class Derived extends Base {
    constructor(){
        super();
        console.log("Derived class constructor called");
    }
}

let obj = new Derived();


//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-41>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-41\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-41\src>node index.js
