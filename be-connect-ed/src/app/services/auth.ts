import { Injectable } from '@angular/core';

export type UserRole = 'student' | 'teacher' | 'parent' ;
export type AccountType = 'institute' | 'independent';


export interface AppUser {
  email: string;
  password: string;     // ( later hash on backend)
  name: string;
  surname: string;
   role: UserRole;

   accountType: AccountType;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 private USERS_KEY = 'users';
  private CURRENT_KEY = 'currentUser';
  private SEED_KEY = 'seededInstituteUsers';

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

  private getUsers(): AppUser[] {
    const raw = localStorage.getItem(this.USERS_KEY);
    return raw ? (JSON.parse(raw) as AppUser[]) : [];
  }

  signOut(): void {
  localStorage.removeItem(this.CURRENT_KEY);
}

seedInstituteUsersOnce(): void {
  const alreadySeeded = localStorage.getItem(this.SEED_KEY);
  if (alreadySeeded === 'yes') return;

  const instituteUsers: AppUser[] = [
    {
      email: 'teacher1@school.com',
      password: 'Teacher123!',
      name: 'Maria',
      surname: 'Borg',
      role: 'teacher',
      accountType: 'institute',
    },
    {
      email: 'student1@school.com',
      password: 'Student123!',
      name: 'Katia',
      surname: 'Camilleri',
      role: 'student',
      accountType: 'institute',
    },
  ];

  const users = this.getUsers();
  const merged = [...users];

  instituteUsers.forEach(u => {
    const exists = merged.some(x => x.email.toLowerCase() === u.email.toLowerCase());
    if (!exists) merged.push(u);
  });

  localStorage.setItem(this.USERS_KEY, JSON.stringify(merged));
  localStorage.setItem(this.SEED_KEY, 'yes');
}


}


  

 

