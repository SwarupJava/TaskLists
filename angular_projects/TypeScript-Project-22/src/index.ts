interface IStudents
{
    Courses:string;
    StudentDetails:string;
}
interface IFaculty
{
    FacultyDetails:string;
    FacultyCourses:string;
}
interface ICollege extends IStudents, IFaculty
{
    CollegeName:string;
}

let NareshIT:ICollege = {
    Courses: "",
    StudentDetails: "",
    FacultyCourses: "",
    FacultyDetails: "",
    CollegeName: ""
}






//Multiple Inheritence

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-22>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-22\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-22\src>node index.js