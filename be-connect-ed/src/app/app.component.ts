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
  accountType: 'institute' | 'independent' | '' = '';

  // institute menus
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

// independent menus
  indStudentMenu: MenuItem[] = [
  { title: 'Home', url: '/ind-student-home' },
  { title: 'Plan & Schedule', url: '/ind-student-calendar' },
  { title: 'Enrolment', url: '/ind-student-enrolment' },
  { title: 'Courses', url: '/ind-student-course' },
  { title: 'Notifications', url: '/ind-student-notifications' },
  { title: 'Chats', url: '/ind-student-chats' },
  { title: 'Profile', url: '/ind-student-profile' },
];

  indTeacherMenu: MenuItem[] = [
  { title: 'Home', url: '/ind-teacher-home' },
  { title: 'Plan & Schedule', url: '/ind-teacher-calendar' },
  { title: 'Enrolment', url: '/ind-teacher-enrolment' },
  { title: 'Courses', url: '/ind-teacher-course' },
  { title: 'Notifications', url: '/ind-teacher-notifications' },
  { title: 'Units', url: '/ind-teacher-unit' },
  { title: 'Profile', url: '/ind-teacher-profile' },
  { title: 'Chats', url: '/ind-teacher-chats' },
];

constructor(private router: Router, private auth: AuthService) {
  this.auth.seedInstituteUsersOnce(); //  once

this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
  const url = this.router.url;
  this.hideChrome = url.startsWith('/auth');

  const u = this.auth.getCurrentUser();
  this.role = (u?.role as any) || '';
});

}

get menuItems(): MenuItem[] {
  const user = this.auth.getCurrentUser();
  if (!user) return [];

  if (user.accountType === 'independent') {
    if (user.role === 'teacher') return this.indTeacherMenu;
    if (user.role === 'student') return this.indStudentMenu;
    return this.indStudentMenu;
  }

  if (user.accountType === 'institute') {
    if (user.role === 'teacher') return this.teacherMenu;
    if (user.role === 'student') return this.studentMenu;
    return this.studentMenu;
  }

  return this.studentMenu;
}



  }








