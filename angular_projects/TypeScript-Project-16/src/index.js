var mobile = "9876543210";
var regExp = /\+91[0-9]{10}/;
if (mobile.match(regExp)) {
    console.log("Mobile verified");
}
else {
    console.log("Invalid Mobile");
}
//npm init -y
//tsc index.ts
//node index.js
//regular expression
