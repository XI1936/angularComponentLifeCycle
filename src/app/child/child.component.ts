import { Component, ContentChild, ContentChildren, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  amount:number = 200;
  name:string="Saif uddin ";
  sometext:string="There has an amendment in the policy, wherein we no longer allow clubbing of EL and CSL, we will be pushing the changes on the policy document at earliest therefore please apply EL accordingly.Regards";
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterContentInit() {

  }

}
