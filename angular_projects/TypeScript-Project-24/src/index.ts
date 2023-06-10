class Demo{
    static s = 0;
    n = 0;
    constructor(){
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Print(){
        console.log(`s=${Demo.s} n=${this.n}`);
    }
}
let obj1 = new Demo();
obj1.Print();
let obj2 = new Demo();
obj2.Print();
let obj3 = new Demo();
obj3.Print();






//Static and Non static members example

//npm init -y
//tsc index.ts
//node index.js


//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24\src>node index.js
