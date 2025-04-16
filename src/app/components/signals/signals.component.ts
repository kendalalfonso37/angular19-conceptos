import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  contador = signal<number>(0);

  subtract() {
    this.contador.update(valorActual => valorActual - 1); 
  }
  
  add(){
    this.contador.update(valorActual => valorActual + 1); 
  }

  reset(){
    this.contador.set(0);
  }
}
