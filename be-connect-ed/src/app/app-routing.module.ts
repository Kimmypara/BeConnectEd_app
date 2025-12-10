import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

IonicModule.forRoot({
  animated: false
})


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'my-units',
    loadChildren: () => import('./my-units/my-units.module').then( m => m.MyUnitsPageModule)
  },
  {
    path: 'enrolment',
    loadChildren: () => import('./enrolment/enrolment.module').then( m => m.EnrolmentPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
