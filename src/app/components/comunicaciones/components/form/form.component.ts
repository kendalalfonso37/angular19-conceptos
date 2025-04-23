import { Component, effect, input, output } from '@angular/core';
import { CreateUsuario, Usuario } from '../../usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comunicaciones-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  // input
  usuario = input<CreateUsuario>();
  // output
  usuarioUpdated = output<Usuario>();

  newUsuario: CreateUsuario = {};

  constructor() {
    effect(() => {
      const usuarioActual = this.usuario();
      this.newUsuario = { ...usuarioActual };
    })
  }

  agregarUsuario() {
    console.log("Nuevo Usuario", this.newUsuario);

    this.usuarioUpdated.emit(this.newUsuario as Usuario)
    // Limpiamos el formulario
    this.newUsuario = {};
  }
}
