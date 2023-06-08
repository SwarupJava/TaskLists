let sales:number[] = [40000.33, 13000.44, 56000.33, 23000.33];

let result:number = sales.find(function(value){
    return value > 20000;
})

console.log(result);







//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-8>npm init -y
/*
D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-8\src>tsc index.ts
index.ts:3:27 - error TS2550: Property 'find' does not exist on type 'number[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

3 let result:number = sales.find(function(value){
                            ~~~~


Found 1 error in index.ts:3

*/
//do not worry about error
//we can proceed
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-8\src>node index.js