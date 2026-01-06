import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth'; // ✅ important path (login is inside auth/)

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class LoginPage {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  goInstituteLogin() {
    this.navCtrl.navigateForward('/auth/institute-login', { animated: false });
  }

  goIndependentLogin() {
    this.navCtrl.navigateForward('/auth/independent-login', { animated: false });
  }

onLogin() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }


  const email = this.loginForm.value.email ?? '';
  const password = this.loginForm.value.password ?? '';

const result = this.authService.login(email, password);

if (!result.ok) {
  alert('Invalid email or password');
  return;
}

const role = result.user!.role;

if (role === 'teacher') {
  this.navCtrl.navigateRoot('/teacher-home'); // teacher
} else if (role === 'parent') {
  this.navCtrl.navigateRoot('/parent-home'); // (for later)
} else {
  this.navCtrl.navigateRoot('/student/home'); // student
}

}

goIndependentRegister() {
  this.navCtrl.navigateForward('/auth/registration?type=independent'); // create account independent 
}


}
  


