var product = {
    "Name": "TV",
    "Price": 5600.44,
    "Stock": true
};
for (var key in product) {
    console.log(key + "-" + product[key]);
}
//npm init -y
//tsc index.ts
//node index.js
//iterate to find all key and value
