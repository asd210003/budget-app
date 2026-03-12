import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    onSubmit() {
      if (this.profileForm.valid) {
        console.log(this.profileForm.value);
        }
      }

  showPassword = true;

  togglePassword() {
    this.showPassword = !this.showPassword;

  }
}
