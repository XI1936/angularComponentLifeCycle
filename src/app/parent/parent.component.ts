import { Component, ContentChild, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
//  @ViewChild('app-child',{static:true}) viewChildSelector;
//  @ContentChild('app-child',{static:true}) contentChildSelector;

  apples:any=[];
  colors:any=[];
  constructor(private appService:GlobalService) { 
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

  ngAfterContentInit(){
    console.log("5.AfterContentInit Called 🎛️🎛️🎛️");
  }
  ngAfterContentChecked(){
    console.log("%c 5.1.AfterContentChecked Called 🎛️🎛️✅",'background: white; color: green');
  }
  ngAfterViewInit(){
    console.log("6.AfterViewInit Called 🕑🕑🕑");
 }
 ngAfterViewChecked(){
  console.log("%c 6.1.AfterViewChecked Called 🕑🕑✅",'background: white; color: green');
}

actionHandler(){
this.appService.getUsers().subscribe(
  (response)=>{
    console.log(response);
    this.colors=response;
  }
)
}

ngOnDestroy(){
  console.log("%c 7onDestroy Called 💥💥💥",'background: white; color: red');

}
}
