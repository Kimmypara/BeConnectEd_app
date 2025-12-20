import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../services/auth';
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

    const success = this.authService.login(
      this.loginForm.value.email!,
      this.loginForm.value.password!
    );

    if (success) {
      this.router.navigate(['/home']);
    }
  }
}

  



