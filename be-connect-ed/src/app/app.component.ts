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
  role: 'student' | 'parent' | 'teacher' | '' = '';

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
  { title: 'Home', url: '/teacher-home' },
  { title: 'Plan & Schedule', url: '/teacher-calendar' },
  { title: 'Enrolment', url: '/teacher-enrolment' }, 
  { title: 'Teaching Units', url: '/teaching-units' },     
  { title: 'Notifications', url: '/teacher-notifications' },     
  { title: 'Chats', url: '/teacher-chats' },     
  { title: 'Profile', url: '/teacher-profile' },    
];

constructor(private router: Router, private auth: AuthService) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url;
      this.hideChrome = url.startsWith('/auth');

      const u = this.auth.getCurrentUser();
      this.role = (u?.role as any) || '';
    });
  }

get menuItems(): MenuItem[] {
  if (this.role === 'student') return this.studentMenu;
  if (this.role === 'teacher') return this.teacherMenu;
  //if (this.role === 'parent') return this.parentMenu; 

  return this.studentMenu; 
}
  }








