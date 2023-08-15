import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  Data:any[] = [
    {Name:"TV", Price:57003.34},
    {Name:"Nike Shop", Price:7300.33}
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}
