var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.GetOneRecord = function (data) {
        for (var property in data) {
            console.log("".concat(property, " : ").concat(data[property]));
        }
    };
    DataService.prototype.GetAll = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            console.log(item);
        }
    };
    return DataService;
}());
var product = new DataService();
product.GetOneRecord({ Name: "TV", Price: 456000 });
product.GetAll([{ Name: "Mobile", Price: 56000.33 }, { Name: "Watch", Price: 3400.33 }]);
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-44>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-44\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-44\src>node index.js
