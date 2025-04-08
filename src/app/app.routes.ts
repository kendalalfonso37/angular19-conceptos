import { Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { VariablesComponent } from './components/variables/variables.component';
import { HeroesComponent } from './components/heroes/heroes.component';

export const routes: Routes = [
  {
    path: "bienvenida",
    component: BienvenidaComponent,
  },
  {
    path: "variables",
    component: VariablesComponent,
  },
  {
    path: "heroes",
    component: HeroesComponent,
  },
  {
    path: "**",
    redirectTo: ""
  }
];
