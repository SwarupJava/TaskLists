class Employee {
    FirstName : string;
    LastName : string;
    Designation : string;
    Print(){
        document.write(`${this.FirstName} ${this.LastName} - ${this.Designation}<br>`)
    }
}

class Developer extends Employee {
    FirstName = "Raj";
    LastName = "Kumar";
    Designation = "Developer";
    Role = "Developer Role - Bulding, Debug, Testing, Deploying";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

class Admin extends Employee {
    FirstName = "Kiran";
    LastName = "Rao";
    Designation = "Admin";
    Role = "Admin Role - Authorization, Authentication";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

class Manager extends Employee {
    FirstName = "Tom";
    LastName = "Hanks";
    Designation = "Manager";
    Role = "Manager Role - Approvals";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

//let employees = new Array(new Developer(), new Admin(), new Manager());

let employees = [];
employees[0] = new Developer();
employees[1] = new Admin();
employees[2] = new Manager();





//npm init -y

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-43>npm init -y


//step 1
//tsc index.ts

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-43\src>tsc index.ts