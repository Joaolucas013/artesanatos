import { BackgroundColor } from './../../../backend/node_modules/chalk/source/index.d';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';



export const aumentarBordaTrigger = trigger('aumentoDeBorda', [
  state('default', style({
    border: '1px solid #8d3434',
  })),
  state('aumentarBorda', style({
    border: '3px solid #8d3434',
    filter: 'brightness(92%)',
    transform: 'scale(1.03)',
  })),
  transition('default => aumentarBorda', animate('100ms ease-out')),
  transition('aumentarBorda => default', animate('200ms ease-in')),
]);


export const estilizarBotao = trigger("estiloBotao", [
    state("default", style({})),
    state("aumentoPadding", style({
        padding:"5px",
        backgroundColor:"#000000"
    })),
    transition("default => aumentoPadding", animate('100ms ease-out')),
    transition("aumentoPadding => default", animate('100ms ease-out'))
])