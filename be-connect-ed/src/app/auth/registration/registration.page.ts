

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

export class RegistrationPage implements OnInit {
  fg = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
  });


  email = '';
  name = '';
  surname = '';

 constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}


 ngOnInit() {
    // if user already logged in, show their details
    const u = this.auth.getCurrentUser();
    if (u) {
      this.email = u.email;
      this.name = u.name;
      this.surname = u.surname;
    }
  }

  save() {
    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
      return;
    }

     const { email, name, surname, password } = this.fg.getRawValue();

      const res = this.auth.register({
      email: email!,
      name: name!,
      surname: surname!,
      password: password!,
    });

    if (!res.ok) {
      alert(res.message);
      return;
    }

        this.router.navigate(['/auth/login']); 

  }

  
}





