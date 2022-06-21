import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  apples:any=[];
  constructor() { 
    console.log("1.Constructor Called 🍾🍾🍾");
  }

  ngOnChanges(){  
    console.log("2.OnChanges Called 🥂🥂🥂");
  }

  ngOnInit(): void {
    this.apples=["🍎","🍎","🍎"];
    console.log("3.OnInit Called 🌏🌏🌏");
  }

  ngDoCheck(){
    console.log("4.DoCheck Called ✅✅✅");
  }

  ngContentInit(){
    console.log("5.ContentInit Called 🎛️🎛️🎛️");
  }

  ngAfterViewInit(){
    console.log("6.AfterViewInit Called 🕑🕑🕑");
 }

}
