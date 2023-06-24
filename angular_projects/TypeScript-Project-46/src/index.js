var HttpVerbs;
(function (HttpVerbs) {
    HttpVerbs[HttpVerbs["DELETE"] = 0] = "DELETE";
    HttpVerbs[HttpVerbs["GET"] = 101] = "GET";
    HttpVerbs[HttpVerbs["PATCH"] = 102] = "PATCH";
    HttpVerbs[HttpVerbs["POST"] = 501] = "POST";
    HttpVerbs[HttpVerbs["PUT"] = 502] = "PUT";
})(HttpVerbs || (HttpVerbs = {}));
console.log("PUT = ".concat(HttpVerbs.PUT));
console.log("DELETE = ".concat(HttpVerbs.DELETE));
console.log("PATCH = ".concat(HttpVerbs.PATCH));
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-46>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-46\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-46\src>node index.js
