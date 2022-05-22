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




//npm init -y
//tsc index.ts
//node index.js
//Multiple Inheritence