import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {



  Mars:any = {};

  LoadMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then(response=> response.json())
    .then(data=>{
       this.Mars = data;
    })
  }

  constructor(){}

  ngOnInit(): void {
      this.LoadMarsPhotos();
  }

}
