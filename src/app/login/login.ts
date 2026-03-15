import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router: Router) {}

    submitted = false;

    profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    onSubmit() {

      this.submitted = true;

      if (this.profileForm.invalid) {
        return;
      }

      this.router.navigate(['/home']);
      }

  showPassword = true;

  togglePassword() {
    this.showPassword = !this.showPassword;

  }

  get username() {
    return this.profileForm.get('username');
  }

  get password() {
    return this.profileForm.get('password');
  }

}
