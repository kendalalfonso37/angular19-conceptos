import { Usuario } from './../../usuario';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-comunicaciones-list',
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  // input
  users = input.required<Usuario[]>();
  // output
  userSelected = output<Usuario>();

  editarUsuario(usuario: Usuario) {
    console.log(`Editar usuario ${JSON.stringify(usuario)}`);
    // Logica para enviar el usuario al componente de app-comunicaciones-form
    this.userSelected.emit(usuario);
  }
}
