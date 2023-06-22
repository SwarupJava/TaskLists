var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Print = function () {
        document.write("".concat(this.FirstName, " ").concat(this.LastName, " - ").concat(this.Designation, "<br>"));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Raj";
        _this.LastName = "Kumar";
        _this.Designation = "Developer";
        _this.Role = "Developer Role - Bulding, Debug, Testing, Deploying";
        return _this;
    }
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Kiran";
        _this.LastName = "Rao";
        _this.Designation = "Admin";
        _this.Role = "Admin Role - Authorization, Authentication";
        return _this;
    }
    Admin.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Admin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Tom";
        _this.LastName = "Hanks";
        _this.Designation = "Manager";
        _this.Role = "Manager Role - Approvals";
        return _this;
    }
    Manager.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.Role);
    };
    return Manager;
}(Employee));
//let employees = new Array(new Developer(), new Admin(), new Manager());
var employees = [];
employees[0] = new Developer();
employees[1] = new Admin();
employees[2] = new Manager();
//npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-43>npm init -y
//step 1
//tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-43\src>tsc index.ts
