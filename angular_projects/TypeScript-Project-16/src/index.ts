var mobile:string = "+919876543210";
var regExp:any = /\+91[0-9]{10}/;

if(mobile.match(regExp)){
    console.log(`Mobile verified`);
} else {
   console.log(`Invalid Mobile`);
}






//regular expression

//9876543210
//Invalid Mobile

//+919876543210
//Mobile verified

//npm init -y
//tsc index.ts
//node index.js

//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-16>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-16\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-16\src>node index.js
