var HttpVerbs;
(function (HttpVerbs) {
    HttpVerbs[HttpVerbs["X"] = 10] = "X";
    HttpVerbs[HttpVerbs["Y"] = 20] = "Y";
    HttpVerbs[HttpVerbs["Z"] = 30] = "Z";
    HttpVerbs[HttpVerbs["A"] = 31] = "A";
})(HttpVerbs || (HttpVerbs = {}));
console.log("A = ".concat(HttpVerbs.A));
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-49>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-49\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-49\src>node index.js
