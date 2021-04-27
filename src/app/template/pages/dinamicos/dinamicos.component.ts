import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorito, Persona } from '../../interfaces/template.interfaces';



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoJuego = '';
  persona: Persona = {
    nombre: 'Guillermo',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Death Stranding'
      }
    ]
  };

  @ViewChild('miFormulario') miFormulario!: NgForm;


  guardar(): void {
    console.log('Formulario posteado');
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid
    && this.miFormulario?.controls.nombre?.touched;
  }

  eliminar( index: number ): void {
    this.persona.favoritos.splice(index, 1);
  }

  agregar(): void{

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({ ...nuevoFavorito});
    this.nuevoJuego = '';

  }


}
