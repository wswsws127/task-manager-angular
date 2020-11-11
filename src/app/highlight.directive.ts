import { Directive,ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  // the selector property specifies the directive's CSS attribute selector
  selector: '[appHighlight]'
  
})
export class HighlightDirective {
  //Add a highlightColor property to the directive class
  //Inside the directive the property is known as highlightColor. 
  //Outside the directive, where you bind to it, it's known as appHighlight.
  @Input('appHighlight') highlightColor: string;

  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    // ElementRef通过其nativeElement属性授予对主机DOM元素的直接访问
  
    // el.nativeElement.style.backgroundColor = 'yellow';
 }
 
 @HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || this.defaultColor || 'red');
}

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
