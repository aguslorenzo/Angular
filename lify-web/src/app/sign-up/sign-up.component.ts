import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
    formSignUp = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', []),
    }, [this.isMismatch]);

    isMismatch(control: AbstractControl): ValidationErrors | null {
      return control.get('password')?.value !== control.get('repeatPassword')?.value
      ? {'passwordMismatch':true} 
      : null
    };

    onSubmit(){
      console.log(this.formSignUp.value);
    }
}
