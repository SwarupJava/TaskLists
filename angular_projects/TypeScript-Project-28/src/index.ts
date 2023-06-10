class Product{
    Name:string = "TV";
    Price:number = 34000;
    Rating:any = {
        Rate: 4.3,
        Count: 4600
    }
    get Rate(){
        return this.Rating.rate as Number;
    }
}
let obj = new Product();
obj.Rate;//accessor
obj.Rating.Rate;// without accessor
console.log(`Product Name : ${obj.Rating.Rate}`);





//accessor
//with out accessor

//npmn init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-28>npm init -y
/*
D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-28\src>tsc index.ts
index.ts:8:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

8     get Rate(){
          ~~~~


Found 1 error in index.ts:8
 */
//no worry
//you can continue
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-28\src>node index.js