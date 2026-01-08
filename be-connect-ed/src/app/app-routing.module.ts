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
    path: 'auth/independent-registration',
    loadChildren: () => import('./auth/independent-registration/independent-registration.module').then( m => m.IndependentRegistrationPageModule)
  },
  {
    path: 'auth/institute-registration',
    loadChildren: () => import('./auth/institute-registration/institute-registration.module').then( m => m.InstituteRegistrationPageModule)
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

  {
    path: 'teacher-profile',
    loadChildren: () => import('./teachers/teacher-profile/teacher-profile.module').then( m => m.TeacherProfilePageModule)
  },


// INDEPENDENT TEACHERS AREA
  {
    path: 'ind-teacher-home',
    loadChildren: () => import('./independent-teachers/ind-teacher-home/ind-teacher-home.module').then( m => m.IndTeacherHomePageModule)
  },
  {
    path: 'ind-teacher-profile',
    loadChildren: () => import('./independent-teachers/ind-teacher-profile/ind-teacher-profile.module').then( m => m.IndTeacherProfilePageModule)
  },
  {
    path: 'ind-teacher-course',
    loadChildren: () => import('./independent-teachers/ind-teacher-course/ind-teacher-course.module').then( m => m.IndTeacherCoursePageModule)
  },
  {
    path: 'ind-teacher-enrolment',
    loadChildren: () => import('./independent-teachers/ind-teacher-enrolment/ind-teacher-enrolment.module').then( m => m.IndTeacherEnrolmentPageModule)
  },
  {
    path: 'ind-teacher-unit',
    loadChildren: () => import('./independent-teachers/ind-teacher-unit/ind-teacher-unit.module').then( m => m.IndTeacherUnitPageModule)
  },
   {
    path: 'ind-teacher-calendar',
    loadChildren: () => import('./independent-teachers/ind-teacher-calendar/ind-teacher-calendar.module').then( m => m.IndTeacherCalendarPageModule)
  },
  {
    path: 'ind-teacher-chats',
    loadChildren: () => import('./independent-teachers/ind-teacher-chats/ind-teacher-chats.module').then( m => m.IndTeacherChatsPageModule)
  },
  {
    path: 'ind-teacher-notifications',
    loadChildren: () => import('./independent-teachers/ind-teacher-notifications/ind-teacher-notifications.module').then( m => m.IndTeacherNotificationsPageModule)
  },

// INDEPENDENT STUDENTS AREA
  {
    path: 'ind-student-home',
    loadChildren: () => import('./independent-students/ind-student-home/ind-student-home.module').then( m => m.IndStudentHomePageModule)
  },
  {
    path: 'ind-student-course',
    loadChildren: () => import('./independent-students/ind-student-course/ind-student-course.module').then( m => m.IndStudentCoursePageModule)
  },
  {
    path: 'ind-student-enrolment',
    loadChildren: () => import('./independent-students/ind-student-enrolment/ind-student-enrolment.module').then( m => m.IndStudentEnrolmentPageModule)
  },
  {
    path: 'ind-student-profile',
    loadChildren: () => import('./independent-students/ind-student-profile/ind-student-profile.module').then( m => m.IndStudentProfilePageModule)
  },
  {
    path: 'ind-student-notifications',
    loadChildren: () => import('./independent-students/ind-student-notifications/ind-student-notifications.module').then( m => m.IndStudentNotificationsPageModule)
  },
  {
    path: 'ind-student-chats',
    loadChildren: () => import('./independent-students/ind-student-chats/ind-student-chats.module').then( m => m.IndStudentChatsPageModule)
  },
  {
    path: 'ind-student-calendar',
    loadChildren: () => import('./independent-students/ind-student-calendar/ind-student-calendar.module').then( m => m.IndStudentCalendarPageModule)
  },
 
{ path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
