import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // AUTH AREA
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./auth/login/login.page').then(m => m.LoginPage)
  },
{
  path: 'auth/institute-login',
  loadComponent: () =>
    import('./auth/institute-login/institute-login.component')
      .then(m => m.InstituteLoginComponent)
},
{
  path: 'auth/independent-login',
  loadComponent: () =>
    import('./auth/independent-login/independent-login.component')
      .then(m => m.IndependentLoginComponent)
},
 {
    path: 'auth/registration',
    loadChildren: () => import('./auth/registration/registration.module').then( m => m.RegistrationPageModule)
  },

   // STUDENT AREA
  { path: 'student/home', 
    loadChildren: () => import('./students/home/home.module').then(m => m.HomePageModule) 
  },
  { path: 'student/calendar',
     loadChildren: () => import('./students/calendar/calendar.module').then(m => m.CalendarPageModule)
     },
  { path: 'student/enrolment', 
    loadChildren: () => import('./students/enrolment/enrolment.module').then(m => m.EnrolmentPageModule)
   },
  { path: 'student/my-units', 
    loadChildren: () => import('./students/my-units/my-units.module').then(m => m.MyUnitsPageModule) 
  },
  { path: 'student/notifications',
     loadChildren: () => import('./students/notifications/notifications.module').then(m => m.NotificationsPageModule) 
    },
  { path: 'student/chats', 
    loadChildren: () => import('./students/chats/chats.module').then(m => m.ChatsPageModule) 
  },
  { path: 'student/profile',
     loadChildren: () => import('./students/profile/profile.module').then(m => m.ProfilePageModule)
     },

  
// TEACHERS AREA
  {
    path: 'teacher-home',
    loadChildren: () => import('./teachers/teacher-home/teacher-home.module').then( m => m.TeacherHomePageModule)
  },
  {
    path: 'teacher-calendar',
    loadChildren: () => import('./teachers/teacher-calendar/teacher-calendar.module').then( m => m.TeacherCalendarPageModule)
  },
  {
    path: 'teacher-enrolment',
    loadChildren: () => import('./teachers/teacher-enrolment/teacher-enrolment.module').then( m => m.TeacherEnrolmentPageModule)
  },
  {
    path: 'teaching-units',
    loadChildren: () => import('./teachers/teaching-units/teaching-units.module').then( m => m.TeachingUnitsPageModule)
  },
  {
    path: 'teacher-notifications',
    loadChildren: () => import('./teachers/teacher-notifications/teacher-notifications.module').then( m => m.TeacherNotificationsPageModule)
  },
  {
    path: 'teacher-chats',
    loadChildren: () => import('./teachers/teacher-chats/teacher-chats.module').then( m => m.TeacherChatsPageModule)
  },
{ path: '**', redirectTo: 'auth/login' },
  {
    path: 'teacher-profile',
    loadChildren: () => import('./teachers/teacher-profile/teacher-profile.module').then( m => m.TeacherProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
