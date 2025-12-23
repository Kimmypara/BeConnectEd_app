import { Injectable } from '@angular/core';

export type UserRole = 'student' | 'teacher' | 'parent' ;


export interface AppUser {
  email: string;
  password: string;     // ( later hash on backend)
  name: string;
  surname: string;
   role: UserRole;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private USERS_KEY = 'users';
  private CURRENT_KEY = 'currentUser';
  

   // Register new user
  register(user: AppUser): { ok: boolean; message?: string } {
    const users = this.getUsers();

    const exists = users.some(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (exists) return { ok: false, message: 'Email already registered' };

    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    return { ok: true };
  }

  

  // Login and set current user
  login(email: string, password: string): { ok: boolean; user?: AppUser } {
    const users = this.getUsers();
    const found = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) return { ok: false };

    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(found));
    return { ok: true, user: found };
  }

  getCurrentUser(): AppUser | null {
    const raw = localStorage.getItem(this.CURRENT_KEY);
    return raw ? (JSON.parse(raw) as AppUser) : null;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_KEY);
  }

  private getUsers(): AppUser[] {
    const raw = localStorage.getItem(this.USERS_KEY);
    return raw ? (JSON.parse(raw) as AppUser[]) : [];
  }
}
