import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-component',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './sign-up-component.component.html',
  styleUrl: './sign-up-component.component.scss'
})
export class SignUpComponentComponent {
  //creamos el formGroup
formSignUp = new FormGroup({
  username: new FormControl('', [Validators.required]), /*arreglo de validaciones sincronicas*/
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl('', [Validators.required]), /*para ver que dos campos sean iguales hay q hacer una validaciones pesronalizada?*/
}, [this.isMismatch]); //esto para probarlo

isMismatch(control: AbstractControl): ValidationErrors | null {
  control.get('password')?.value;
  //si no coinciden devuelvo el objeto validationeror, sino nulo
  return control.get('password')?.value !== control.get('confirmPassword')?.value 
  ? {passwordMismatch: true }
  : null /*esto es ternario*/
};

onSubmit(){
  /*aca accedo a todos los valorse del formulario
  esto se podria enviar a la API Rest. 
  En la docu recomienda solo capturar los datos y con un eventos enviar los datos al otro componente. A traves de un evento de salida
  con un output
  */
 if(this.formSignUp.valid){
  console.log(this.formSignUp.value);
 }
}
  
}
