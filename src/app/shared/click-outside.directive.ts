// import {
//   Directive,
//   ElementRef,
//   Output,
//   EventEmitter,
//   HostListener,
// } from "@angular/core";

// @Directive({
//   selector: "[appClickOutside]",
// })
// export class ClickOutsideDirective {
//   constructor(private elementRef: ElementRef) {
//     console.log("constructor log");
//   }

//   @Output() public clickOutside = new EventEmitter();

//   @HostListener("document:click", ["$event.target"])
//   public onClick(targetElement: any) {
//     const clickedInside = this.elementRef.nativeElement.contains(targetElement);

//     console.log("outside click");
//     if (
//       !clickedInside &&
//       (!targetElement.dataset || !targetElement.dataset.click)
//     ) {
//       this.clickOutside.emit(null);
//     }
//   }
// }

import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[clickOutside]",
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
