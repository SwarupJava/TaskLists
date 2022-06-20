class Product{
    Name:string = "TV";
    Price:number = 34000;
    Rating:any = {
        Rate: 4.3,
        Count: 4600
    }
    get Rate(){
        return this.Rating.rate as Number;
    }
}
let obj = new Product();
obj.Rate;//accessor
obj.Rating.Rate;// without accessor

//tsc index.ts