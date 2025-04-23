import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-variables',
  imports: [FormsModule],
  templateUrl: './variables.component.html',
})
export class VariablesComponent {
  // One-Way Data Binding
  myTitle: string = `Hola soy la variable myTitle`;
  saldo: number = 123.32;

  // Property Binding
  link = 'https://v7.angular.cn/assets/images/logos/angular/angular.svg'

  // Event Binding
  textAreaValue = "";

  // Creamos un EventEmitter local
  customSubmit: EventEmitter<string> = new EventEmitter();

  constructor() {
    // Suscribirse al evento para mostrar el valor emitido
    this.customSubmit.subscribe((value: string) => {
      console.log('Valor emitido desde textarea:', value);
    });
  }

  onSubmit() {
    this.customSubmit.emit(this.textAreaValue); // emitir el valor del textarea
  }

  // Two-Way Data Binding
  review = "Default review";
  onSubmitReview() {
    this.review = "Default review";
  }
}
