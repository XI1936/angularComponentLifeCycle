import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHilighter]'
})
export class HilighterDirective implements OnInit{
  @Input() textClass: string ='white';
  constructor(private eRef: ElementRef) {
   
   }

   ngOnInit(){
    console.log("-----in directive");
    this.eRef.nativeElement.style.background = 'red';
    this.eRef.nativeElement.style.color = this.textClass;
    this.eRef.nativeElement.style.padding = '5px';
    this.eRef.nativeElement.style.borderRadius = '0.7em';
   }

}
