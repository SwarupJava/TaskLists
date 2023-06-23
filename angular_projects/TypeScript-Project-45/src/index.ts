interface IProduct {
    Name : string;
    Price : number;
}

interface IEmployee{
    Name : string;
    LastName : string;
    Designation : string;
}

class DataService {
    public GetOneRecord<T>(data : T){
       for(var property in data){
           console.log(`${property} : ${data[property]}`);
       }
    }

    public GetAll<T extends IProduct|IEmployee>(data:T[]){
        for(var item of data){
           console.log(item.Name);
        }
    }
}

console.log(`--------Product---------`);
let product = new DataService();
product.GetOneRecord<IProduct>({Name:"TV", Price:456000});
product.GetAll<IProduct>([{Name:"Mobile", Price:56000.33}, {Name:"Watch", Price:3400.33}]);

console.log(`--------Employee---------`);
let emp = new DataService();
emp.GetOneRecord<IEmployee>({Name : "Raj", LastName : "Kumar", Designation : "Developer"});
emp.GetAll<IEmployee>([{Name : "Raj", LastName : "Kumar", Designation : "Developer"}]);








//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-45>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-45\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-45\src>node index.js