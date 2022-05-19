var products = [
    { Id: 1, "Name": "TV", "Price": 45600.44 },
    { Id: 2, "Name": "mobile", "Price": 5600.33 }
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var item = products_1[_i];
    console.log(item.Name + "-" + item.Price);
}
//npm init -y
//tsc index.ts
//node index.js
//iterate all data
