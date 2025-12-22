

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone:false
})

export class RegistrationPage {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
  });


   constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    if (this.form.invalid) return;

    const res = this.auth.register(this.form.getRawValue() as any);

    if (!res.ok) {
      alert(res.message);
      return;
    }

    //  go to login page
    this.router.navigate(['/auth/login']);

  }
}





