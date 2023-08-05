import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  Product:any={
    Name:'Samsung TV',
    Price:45000.33,
    City:'Delhi',
    Stock:true
  }

}
