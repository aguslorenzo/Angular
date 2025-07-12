import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, NgIf],
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

    constructor(
      private usersDataService: UsersDataService,
      private router: Router
    ) {}

    isMismatch(control: AbstractControl): ValidationErrors | null {
      return control.get('password')?.value !== control.get('repeatPassword')?.value
      ? {'passwordMismatch':true} 
      : null
    };

    onSubmit(){
      
      const {username, email, password} = this.formSignUp.value;

      this.usersDataService.addUser({username: username!, email: email!, password: password!}).subscribe({
        next: () => {
          this.router.navigate(['/checkout']);
        },
        error: (err) => console.error('Error registering user.', err)
    });
}
}
