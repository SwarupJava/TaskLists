var HdfcBankApp_Modern = {
    NRIBanking: "NRI Banking Services",
    PersonalBanking: "Personal Banking Services",
    RetailBanking: "Corporate Banking Services"
};
var HdfcBankApp_Legacy = {
    PersonalBanking: "Personal Banking Services",
    RetailBanking: "Corporate Banking Services"
};
console.log("---Modern Bank App----");
for (var property in HdfcBankApp_Modern) {
    console.log(HdfcBankApp_Modern[property]);
}
console.log("----Legacy Bank App----");
for (var property in HdfcBankApp_Legacy) {
    console.log(HdfcBankApp_Legacy[property]);
}
//Single inheritance
//npm init -y
//tsc index.ts
//node index.js
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-20>npm init -y
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-20\src>tsc index.ts
//D:\angularsudhakar\code\all_projects\angular_projects\TypeScript-Project-20\src>node index.js
