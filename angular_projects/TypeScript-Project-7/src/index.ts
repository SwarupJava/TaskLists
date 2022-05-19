let sales:number[] = [40000.33, 13000.44, 56000.33, 23000.33];

let result:number[] = sales.filter(function(value){
    return value > 20000;
})

console.log(result);




//npm init -y
//tsc index.ts
//node index.js
