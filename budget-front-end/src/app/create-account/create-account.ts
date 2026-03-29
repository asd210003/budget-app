import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateService } from '../create-service';

@Component({
  selector: 'app-create-account',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {

  constructor(private router: Router, private createService: CreateService) {}

  submitted = false;
  message = "";

  formValid = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.submitted = true;

    if (this.formValid.invalid) {
      return;
    }

    this.createService.create(this.firstName?.value!, this.username?.value!, this.email?.value!, this.password?.value!).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.message = err.value;
      }
    })

  }

  get firstName() {
    return this.formValid.get('firstName');
  }

  get username() {
    return this.formValid.get('username');
  }

  get email() {
    return this.formValid.get('email');
  }

  get password() {
    return this.formValid.get('password');
  }

  get cPassword() {
    return this.formValid.get('cPassword');
  }

}
