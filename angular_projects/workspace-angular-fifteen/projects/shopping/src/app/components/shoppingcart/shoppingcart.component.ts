import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {



  Categories:string[] = [];
  Products:any[] = [];
  CartItems:any[] = [];
  CartCount:number = 0;
  ShowCart:boolean =false;
  cartTotalAmount:number = 0.00;



  LoadCartCount(){
    this.CartCount = this.CartItems.length;
  }


  LoadCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data=>{
      data.unshift("all");
      this.Categories = data;
    })
  }

  LoadProducts(url:string){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.Products = data;
    })
  }

  constructor(){}

  ngOnInit(): void {
      this.LoadCategories();
      this.LoadProducts('https://fakestoreapi.com/products/');
      this.LoadCartCount();
    }


  CategoryCahnged(e:any){
      alert(e.target.value);
      if(e.target.value=='all'){
        this.LoadProducts(`https://fakestoreapi.com/products/`);
      }else{
        this.LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
      }
      
    }


  AddToCartClick(id:number){
     alert(id);
     fetch(`https://fakestoreapi.com/products/${id}`)
     .then(response=> response.json())
     .then(data=>{
      this.CartItems.push(data);
      alert(`${data.title} \n Added to cart`)
      alert(`${data.price} will add into total amount`)
      this.TotalPriceRate(data.price);
      this.LoadCartCount();
    })
  }


  ShowCartClick(){
    this.ShowCart = (this.ShowCart == true)?false:true;
  }

  DeleteCartItem(index:number){
      let flag = confirm("Are you sure, you want to delete?");
      if(flag == true){
        this.CartItems.splice(index, 1);
        this.LoadCartCount();
        this.DeleteAmount(this.CartItems);
      }
  }


  DeleteAmount(CartItems:any[]){
    var num = 0;
    this.cartTotalAmount = 0.00;
    for(num = 0; num <= CartItems.length; num++){
      alert(`${this.CartItems[num].price} will add into cart`)
      this.cartTotalAmount += this.CartItems[num].price;
    }
  }


  TotalPriceRate(amount:number){
    this.cartTotalAmount += amount;
  }

}
