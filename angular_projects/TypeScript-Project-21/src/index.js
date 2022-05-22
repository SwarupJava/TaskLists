var HdfcBankApp_Modern = {
    NRIBanking: "NRI Banking Services",
    PersonalBanking: "Personal Banking Services",
    RetailBanking: "Corporate Banking Services"
};
var HdfcBankApp_Legacy = {
    PersonalBanking: "Personal Banking Services",
    RetailBanking: "Corporate Banking Services"
};
var HdfcBankApp_Govt = {
    NRIBanking: "NRI Banking Services",
    PersonalBanking: "Personal Banking Services",
    RetailBanking: "Corporate Banking Services",
    AGRI: "Govt. Loans for Farmers"
};
console.log("---Modern Bank App----");
for (var property in HdfcBankApp_Modern) {
    console.log(HdfcBankApp_Modern[property]);
}
console.log("----Legacy Bank App----");
for (var property in HdfcBankApp_Legacy) {
    console.log(HdfcBankApp_Legacy[property]);
}
console.log("----Bank App with Govt. Loans----");
for (var property in HdfcBankApp_Govt) {
    console.log(HdfcBankApp_Govt[property]);
}
//npm init -y
//tsc index.ts
//node index.js
//Multi Level Inheritance
