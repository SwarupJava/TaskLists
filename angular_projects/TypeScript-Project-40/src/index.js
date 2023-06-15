var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("Connected to ".concat(dbName, " Database"));
    }
    Database.prototype.Insert = function () {
        console.log("Record Inserted");
    };
    Database.prototype.Delete = function () {
        console.log("Record Deleted");
    };
    return Database;
}());
var obj = new Database("Oracle");
obj.Insert();
//parameter pass to constructor
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-40\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-40\src>node index.js
