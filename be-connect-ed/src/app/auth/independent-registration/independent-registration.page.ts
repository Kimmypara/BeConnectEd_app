import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-independent-registration',
  templateUrl: './independent-registration.page.html',
  styleUrls: ['./independent-registration.page.scss'],
  standalone: false
})
export class IndependentRegistrationPage implements OnInit {

 
  accountType: 'institute' | 'independent' = 'independent';

  fg = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
    role: ['student', Validators.required],
  });

  email = '';
  name = '';
  surname = '';
  roleSelectOpts: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit() {
  this.accountType = 'independent';
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
      role: v.role as any,
      accountType: this.accountType,
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
