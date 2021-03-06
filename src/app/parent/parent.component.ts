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
    console.log("1.Constructor Called πΎπΎπΎ");
  }

  ngOnChanges(){
    console.log("2.OnChanges Called π₯π₯π₯");
  }

  ngOnInit(): void {
    this.apples=["π","π","π"];
    console.log("3.OnInit Called πππ");
  }

  ngDoCheck(){
    console.log("4.DoCheck Called βββ");
  }

  ngAfterContentInit(){
    console.log("5.AfterContentInit Called ποΈποΈποΈ");
  }
  ngAfterContentChecked(){
    console.log("%c 5.1.AfterContentChecked Called ποΈποΈβ",'background: white; color: green');
  }
  ngAfterViewInit(){
    console.log("6.AfterViewInit Called πππ");
 }
 ngAfterViewChecked(){
  console.log("%c 6.1.AfterViewChecked Called ππβ",'background: white; color: green');
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
  console.log("%c 7onDestroy Called π₯π₯π₯",'background: white; color: red');

}
}
