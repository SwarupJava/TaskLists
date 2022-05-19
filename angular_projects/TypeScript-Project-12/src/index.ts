let products:any[] = [
    {Id:1, "Name":"TV", "Price":45600.44},
    {Id:2, "Name":"mobile", "Price":5600.33}
]

for(var item of products){
    console.log(item.Name + "-" + item.Price) ;
}






//npm init -y
//tsc index.ts
//node index.js
//iterate all data