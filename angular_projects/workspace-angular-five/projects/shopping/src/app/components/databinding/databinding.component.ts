import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  /*Product:any = {
    id:1,
    title: 'Samsung TV',
    price:56000.44
  };*/

  productName:string = "TV";

  constructor(){}

  ngOnInit(): void {
    

    }
  }


