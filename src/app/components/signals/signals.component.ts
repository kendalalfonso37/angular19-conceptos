import { DecimalPipe } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';


@Component({
  selector: 'app-signals',
  imports: [DecimalPipe],
  templateUrl: './signals.component.html',
})
export class SignalsComponent {
  // Signals
  contador = signal<number>(0);

  subtract() {
    this.contador.update(valorActual => valorActual - 1);
  }

  add() {
    this.contador.update(valorActual => valorActual + 1);
  }

  reset() {
    this.contador.set(0);
  }
  // Computed
  porcentaje = computed(() => this.contador() * 0.20);

  firstName = signal('John');
  lastName = signal('Doe');

  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  // effect
  myeffect = effect(() => {
    console.log(`Valor del contador: ${this.contador()}`);
  });
}
