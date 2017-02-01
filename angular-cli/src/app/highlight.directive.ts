import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() colour: string;

  private elem: ElementRef;

  @HostListener('mouseenter') onMouseEnter(){

      this.highlight("yellow");
  }
  @HostListener('mouseout') onMouseOuter(){

    this.highlight("red");
  }

  constructor(el: ElementRef)
  {
    this.elem = el;
  }

  public highlight(color: string){
    this.elem.nativeElement.style.backgroundColor = this.colour;
  }
}
