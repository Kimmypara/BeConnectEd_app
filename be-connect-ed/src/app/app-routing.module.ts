import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },
{
  path: 'auth/institute-login',
  loadComponent: () =>
    import('./institute-login/institute-login.component')
      .then(m => m.InstituteLoginComponent)
},
{
  path: 'auth/independent-login',
  loadComponent: () =>
    import('./independent-login/independent-login.component')
      .then(m => m.IndependentLoginComponent)
},

  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'my-units',
    loadChildren: () =>
      import('./my-units/my-units.module').then(m => m.MyUnitsPageModule)
  },
  {
    path: 'enrolment',
    loadChildren: () =>
      import('./enrolment/enrolment.module').then(m => m.EnrolmentPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('./chats/chats.module').then(m => m.ChatsPageModule)
  },

  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
