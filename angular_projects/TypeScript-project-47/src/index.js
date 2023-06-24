var HttpVerbs;
(function (HttpVerbs) {
    HttpVerbs[HttpVerbs["DELETE"] = 0] = "DELETE";
    HttpVerbs["GET"] = "Fetch Data";
    HttpVerbs[HttpVerbs["PATCH"] = 102] = "PATCH";
    HttpVerbs[HttpVerbs["PUT"] = 103] = "PUT";
    HttpVerbs["POST"] = "Submit Data";
})(HttpVerbs || (HttpVerbs = {}));
console.log("DELETE=".concat(HttpVerbs.DELETE));
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-project-47>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-project-47\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-project-47\src>node index.js
