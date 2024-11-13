import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: 'etkinlik-olustur',
    loadChildren: () => import('./modules/create-event/create-event.module').then((m) => m.CreateEventModule)
  },
  {
    path: 'konserler',
    loadChildren: () => import('./modules/concert/concert.module').then((m) => m.ConcertModule)
  },
  {
    path: 'tiyatrolar',
    loadChildren: () => import('./modules/theatre/theatre.module').then((m) => m.TheatreModule)
  },
  {
    path: 'musicals',
    loadChildren: () => import('./modules/musical/musical.module').then((m) => m.MusicalModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./modules/notifications/notifications.module').then((m) => m.NotificationsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)
  },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
