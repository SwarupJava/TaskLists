//let values:string[]|number[] = [10, "A"];//union of types can not be initialized
var values = [];
values[0] = "A"; //union of types can be assigned
values[1] = 10; //union of types can be assigned
console.log(values[0] + "->" + values[1]);
//check union of types
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-9>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-9\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-9\src>node index.js
