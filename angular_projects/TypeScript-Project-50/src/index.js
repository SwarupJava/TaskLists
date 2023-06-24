var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes[404]);
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-50>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-50\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-50\src>node index.js
