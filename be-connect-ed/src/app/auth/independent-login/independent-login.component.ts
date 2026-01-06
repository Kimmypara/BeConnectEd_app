import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-independent-login',
  templateUrl: './independent-login.component.html',
  styleUrls: ['./independent-login.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class IndependentLoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    if (this.loginForm.invalid) return;

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    const result = this.authService.login(email, password);

    if (!result.ok) {
      alert('Invalid email or password');
      return;
    }

    const user = result.user!;

    //  Enforce Independent login screen
    if (user.accountType !== 'independent') {
      alert('This is an Institute account. Please use Institute Login.');
      return;
    }

    //  Redirect by role
   if (user.role === 'teacher') {
  this.router.navigate(['/teacher-home']);
} else if (user.role === 'parent') {
  this.router.navigate(['/student/home']); // temporary for parent
} else {
  this.router.navigate(['/student/home']); // student
}
 
  }
}
