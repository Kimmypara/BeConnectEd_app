

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
     role: ['student' as const, Validators.required],
  });


  email = '';
  name = '';
  surname = '';
roleSelectOpts: any;
  navCtrl: any;

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
    this.roleSelectOpts = { cssClass: 'role-select-alert' };

  }

save() {
  console.log('SAVE CLICKED', this.fg.getRawValue());

if (this.fg.invalid) {
  const keys = ['email', 'name', 'surname', 'password', 'role'] as const;

  const invalid = keys.filter(k => this.fg.get(k)?.invalid);

  console.log('INVALID CONTROLS:', invalid);
  console.log('CONTROL ERRORS:', {
    email: this.fg.get('email')?.errors,
    name: this.fg.get('name')?.errors,
    surname: this.fg.get('surname')?.errors,
    password: this.fg.get('password')?.errors,
    role: this.fg.get('role')?.errors,
  });

  this.fg.markAllAsTouched();
  return;
}


  const v = this.fg.getRawValue();

  const res = this.auth.register({
    email: v.email!,
    name: v.name!,
    surname: v.surname!,
    password: v.password!,
    role: v.role!,
    accountType: 'independent', //  self-register = independent
  });

  console.log('REGISTER RESULT', res);

  if (!res.ok) {
    alert(res.message || 'Registration failed');
    return;
  }

  alert('Registered successfully ✅ Going to login...');
 this.router.navigate(['/auth/login']);

 
}


}

       





