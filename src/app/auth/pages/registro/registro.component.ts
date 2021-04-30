import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {




  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ]],
    correo: ['', [ Validators.required, Validators.pattern(this.vs.correoPattern) ], [this.ev] ],
    usuario: ['', [ Validators.required, this.vs.noPuedeSerMemo ] ],
    contrasena: ['', [ Validators.required, Validators.minLength(6) ]],
    contrasena2: ['', [ Validators.required ]],
  }, {
    validators: [ this.vs.composIguales('contrasena', 'contrasena2') ]
  });

  public get emailErrorMsg(): string {

    const errors = this.miFormulario.get('correo')?.errors;
    if (errors?.required) {
      return 'El correo es obligatorio';
    }else if (errors?.pattern) {
      return 'Lo escrito no tiene formato de correo';
    }else if (errors?.emailTomado) {
      return 'Este correo ya existe';
    }
    return '';
  }


  constructor(  private fb: FormBuilder,
                private vs: ValidatorService,
                private ev: EmailValidatorService ) { }


  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Guillermo Cabrera',
      correo: 'test1@test.com',
      usuario: 'Memo7',
      contrasena: '123456',
      contrasena2: '123456',
    });

  }

  campoNoValido(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(): {}{
  //   return this.miFormulario.get('correo')?.errors?.required
  //           && this.miFormulario.get('correo')?.touched;
  // }

  // emailFormato(): {}{
  //   return this.miFormulario.get('correo')?.errors?.pattern
  //           && this.miFormulario.get('correo')?.touched;
  // }

  // emailTomado(): {}{
  //   return this.miFormulario.get('correo')?.errors?.emailTomado
  //           && this.miFormulario.get('correo')?.touched;
  // }

  submitFormulario(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }

}
