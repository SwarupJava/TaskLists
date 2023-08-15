import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent implements OnInit {

  thenBlock:TemplateRef<any>|null = null;

 @ViewChild('then1', {static:true}) then1:TemplateRef<any>|null = null;
 @ViewChild('then2', {static:true}) then2:TemplateRef<any>|null = null;
 @ViewChild('then3', {static:true}) then3:TemplateRef<any>|null = null;
  
  constructor(){}

  ngOnInit(): void {
      this.thenBlock = this.then3;
  }

  Button1Click(){
    this.thenBlock = this.then1;
  }

  Button2Click(){
    this.thenBlock = this.then2;
  }

  Button3Click(){
    this.thenBlock = this.then3;
  }
}
