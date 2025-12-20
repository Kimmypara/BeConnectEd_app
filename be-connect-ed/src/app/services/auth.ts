import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    // Temporary mock logic
    if (email && password) {
      this.isAuthenticated = true;
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
