import { Directive, effect, ElementRef, Input, input } from '@angular/core';

@Directive({
  selector: '[appQuantidade]',
})
export class QuantidadeDirective {
  appQuantidade = input<number>(0);

  constructor(private elemento: ElementRef<HTMLElement>) {
    effect(() => {
      const valor = this.appQuantidade();

      if (valor > 5) {
        this.elemento.nativeElement.style.color = 'red';
      } else {
        this.elemento.nativeElement.style.color = 'blue';
      }
    });
  }
}
