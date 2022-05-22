interface IBankVersion1
{
    PersonalBanking:string;
    RetailBanking:string;
}
interface IBankVersion2 extends IBankVersion1
{
    NRIBanking:string;
}
interface IBankVersion3 extends IBankVersion2
{
    AGRI:string;
}

let HdfcBankApp_Modern:IBankVersion2 = {
    NRIBanking : "NRI Banking Services",
    PersonalBanking : "Personal Banking Services",
    RetailBanking : "Corporate Banking Services"
}
let HdfcBankApp_Legacy:IBankVersion1 = {
    PersonalBanking : "Personal Banking Services",
    RetailBanking : "Corporate Banking Services"
}

let HdfcBankApp_Govt:IBankVersion3 = {
    NRIBanking : "NRI Banking Services",
    PersonalBanking : "Personal Banking Services",
    RetailBanking : "Corporate Banking Services",
    AGRI: "Govt. Loans for Farmers"
}

console.log(`---Modern Bank App----`);
for(var property in HdfcBankApp_Modern) {
    console.log(HdfcBankApp_Modern[property]);
}

console.log(`----Legacy Bank App----`);
for(var property in HdfcBankApp_Legacy) {
    console.log(HdfcBankApp_Legacy[property]);
}

console.log(`----Bank App with Govt. Loans----`);
for(var property in HdfcBankApp_Govt) {
    console.log(HdfcBankApp_Govt[property]);
}






//npm init -y
//tsc index.ts
//node index.js
//Multi Level Inheritance