import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestdir]'
})
export class TestdirDirective {

  constructor() { }

  @HostListener('click') click(e) {
  	console.log(e)
  }
  

}
