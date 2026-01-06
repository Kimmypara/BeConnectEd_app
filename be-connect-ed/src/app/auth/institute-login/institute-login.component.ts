import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';




@Component({
  standalone: true,
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.scss'],
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})

export class InstituteLoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  
 constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  


 onLogin() {
  console.log('FORM SUBMITTED', this.loginForm.value);

  if (this.loginForm.invalid) return;

  const email = this.loginForm.value.email ?? '';
  const password = this.loginForm.value.password ?? '';

  const result = this.authService.login(email, password);

  if (!result.ok) {
    alert('Invalid email or password');
    return;
  }

   const user = result.user!;

  //  Enforce Institute login screen
  if (user.accountType !== 'institute') {
    alert('This is an Independent account. Please use Independent Login.');
    return;
  }

  const role = result.user!.role;

  if (role === 'teacher') {
    this.router.navigate(['/teacher-home']);
  } 
  //else if (role === 'parent') {
   // this.router.navigate(['/parent-home']); // for later
  //}
   else {
    // student (default)
    this.router.navigate(['/student/home']);
  }
}

}


