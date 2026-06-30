
import { Directive, effect, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appValor]',
})
export class ValorDirective {
  appValor = input<number>(0);

  constructor(private elemento: ElementRef<HTMLElement>) {
    effect(() => {
      const valor = this.appValor();

      if(valor < 50){
        this.elemento.nativeElement.style.color = "blue"
        this.elemento.nativeElement.style.fontWeight = "bold"
      }
    });
  }
}
