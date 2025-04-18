import { Component, signal, WritableSignal } from '@angular/core';
import heroes from "./heroes.json"
import { CreateHeroe, Heroe } from './heroes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {

  heroesList: WritableSignal<Heroe[]>;
  newHeroe: CreateHeroe;

  constructor() {
    this.heroesList = signal<Heroe[]>(heroes);
    this.newHeroe = {};
  }

  agregarHeroe() {
    console.log("Nuevo Heroe", this.newHeroe);

    if (!this.newHeroe.id) {
      console.warn("No se puede agregar o actualizar un héroe sin ID");
      return;
    }
    const currentHeroes = this.heroesList();
    const heroeIndex = currentHeroes.findIndex(h => h.id === this.newHeroe.id);

    if (heroeIndex !== -1) {
      // El héroe existe, actualizamos sus datos
      const updatedHeroes = [...currentHeroes];
      updatedHeroes[heroeIndex] = this.newHeroe as Heroe;
      this.heroesList.set(updatedHeroes);
      console.log("Heroe actualizado.");
    } else {
      // El héroe no existe, lo agregamos
      const newHeroes = [...currentHeroes, this.newHeroe as Heroe];
      this.heroesList.set(newHeroes);
      console.log("Heroe agregado.");
    }

    // Limpiamos el formulario
    this.newHeroe = {};
  }

  extractHeroe(heroe: Heroe) {
    console.log("Heroe: ", heroe);
    // Seteamos el valor de newHeroe con el que se obtuvo del evento.
    this.newHeroe = heroe;
  }
}
