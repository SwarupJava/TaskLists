let productMap:any = new Map();
productMap.set(1, "SAMSUNG TV");
productMap.set("Watch", "Fastrack Watch");

console.log(productMap.get("Watch"));





//find the value from key

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-14>npm init -y
/*
D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-14\src>tsc index.ts
index.ts:1:26 - error TS2583: Cannot find name 'Map'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

1 let productMap:any = new Map();
                           ~~~


Found 1 error in index.ts:1
*/
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-14\src>node index.js
