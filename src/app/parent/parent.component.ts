import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  apples:any=[];
  constructor() { }

  ngOnInit(): void {
    this.apples=["🍎","🍎","🍎"];
  }

  ngAfterViewInit(){
 }
}
