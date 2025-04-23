import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CreateUsuario, Usuario } from './usuario';

import usuarios from "./usuarios.json"

@Component({
  selector: 'app-comunicaciones',
  imports: [FormsModule, ListComponent, FormComponent],
  templateUrl: './comunicaciones.component.html',
})
export class ComunicacionesComponent {
  usuariosList: WritableSignal<Usuario[]>;
  newUsuario: WritableSignal<CreateUsuario>;

  constructor() {
    this.usuariosList = signal<Usuario[]>(usuarios);
    this.newUsuario = signal<CreateUsuario>({});
  }

  agregarUsuario(usuario: Usuario) {
    console.log("Nuevo Usuario recibido de form.component.ts", usuario);

    if (!usuario.id) {
      console.warn("No se puede agregar o actualizar un usuario sin ID");
      return;
    }
    const currentUsuarios = this.usuariosList();
    const usuarioIndex = currentUsuarios.findIndex(u => u.id === usuario.id);

    if (usuarioIndex !== -1) {
      // El usuario existe, actualizamos sus datos
      const updatedUsuarios = [...currentUsuarios];
      updatedUsuarios[usuarioIndex] = { ...usuario };
      this.usuariosList.set(updatedUsuarios);
      console.log("Usuario actualizado.");
    } else {
      // El usuario no existe, lo agregamos
      const newUsuarios = [...currentUsuarios, usuario];
      this.usuariosList.set(newUsuarios);
      console.log("Usuario agregado.");
    }

    // Limpiamos el formulario
    this.newUsuario.set({});

  }

  handleSelectedUser(usuario: Usuario) {
    console.log(`Usuario recibido de parte de list.component.ts: ${JSON.stringify(usuario)}`);
    this.newUsuario.set(usuario as CreateUsuario);
  }

}
