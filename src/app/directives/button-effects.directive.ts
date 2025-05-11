import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButtonEffects]'
})
export class ButtonEffectsDirective {
  @Input() buttonFocusBgColor:string = 'linear-gradient(to top, rgb(215, 72, 92) 0%, rgb(113, 8, 30) 100%)'
  @Input() buttonDefaultBgColor:string = 'linear-gradient(to top, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)'
  constructor(private el:ElementRef, private rend:Renderer2) { }

  private _backgroundImage:string = '';
  @HostBinding('style.backgroundImage')
  get getBgColor() {
    return this._backgroundImage
  }
  private _isOnFocus:boolean = false;

  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus
  }

  @HostListener('mouseenter')
  onFocus() {
    this._isOnFocus = true;
    this.changeElementBgImage(this.buttonFocusBgColor);
  }
  @HostListener('mouseleave')
  onBlur() {
    this._isOnFocus = false;
    this.changeElementBgImage(this.buttonDefaultBgColor);
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event:Event, target:HTMLElement) {
    console.log(event)
    console.log(target)
  }

  ngOnInit() {
    this.changeElementBgImage(this.buttonDefaultBgColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',this.el.nativeElement.getAttribute('placeholder') + '*')
  }

  changeElementBgImage(color:string) {
    this._backgroundImage = color;
    this.rend.setStyle(this.el.nativeElement, 'background-color', color)
  }

}
