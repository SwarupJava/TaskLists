var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 0;
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Demo.prototype.Print = function () {
        console.log("s=".concat(Demo.s, " n=").concat(this.n));
    };
    Demo.s = 0;
    return Demo;
}());
var obj1 = new Demo();
obj1.Print();
var obj2 = new Demo();
obj2.Print();
var obj3 = new Demo();
obj3.Print();
//Static and Non static members example
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-24\src>node index.js
