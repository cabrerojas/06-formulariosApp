import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding', Validators.required ],
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required );

  public get favortiosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(): void{
    if (this.nuevoFavorito.invalid) { return; }

    // this.favortiosArr.push( new FormControl (this.nuevoFavorito.value , Validators.required ) );
    this.favortiosArr.push( this.fb.control(this.nuevoFavorito.value , Validators.required ) );

    this.nuevoFavorito.reset();
  }
  borrar(index: number): void {
    this.favortiosArr.removeAt(index);
  }

  guardar(): void {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    // this.miFormulario.reset();

  }


}
