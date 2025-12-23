import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { AppUser, AuthService } from './services/auth';

type MenuItem = { title: string; url: string };

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
   standalone: false,
})

export class AppComponent {
  hideChrome = false;
  user: AppUser | null = null;

  // 3 menus
  studentMenu: MenuItem[] = [
  { title: 'Home', url: '/student/home' },
  { title: 'Plan & Schedule', url: '/student/calendar' },
  { title: 'Enrolment', url: '/student/enrolment' },
  { title: 'My Units', url: '/student/my-units' },
  { title: 'Notifications', url: '/student/notifications' },
  { title: 'Chats', url: '/student/chats' },
  { title: 'Profile', url: '/student/profile' },
];

teacherMenu = [
  { title: 'Home', url: '/teacher/home' },
  { title: 'Plan & Schedule', url: 'teachers/teacher-calendar' },
  { title: 'Enrolment', url: 'teachers/teacher-enrolment' }, 
  { title: 'Teaching Units', url: 'teachers/teaching-units' },     
  { title: 'Notifications', url: 'teachers/teacher-notifications' },     
  { title: 'Chats', url: 'teachers/teacher-chats' },     
  { title: 'Profile', url: 'teachers/teacher-profile' },    
];

constructor(private router: Router, private auth: AuthService) {
    // Hide menu + bottom nav on auth pages
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        this.hideChrome = url.startsWith('/auth');
        this.user = this.auth.getCurrentUser();
      });
  }

  get menuItems(): MenuItem[] {
    const role = this.user?.role;

    if (role === 'student') return this.studentMenu;
    if (role === 'teacher') return this.teacherMenu;

    // default student
    return this.studentMenu;
  }
}





