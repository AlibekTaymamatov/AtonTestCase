import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page.component';
import { authGuard } from 'src/app/classes/auth.guard';

/** @type {Routes} Определение дочерних маршрутов и защита роутов*/
const itemRoutes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('../register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../user-list/user-list.module').then(m => m.UserListModule),
    canMatch: [authGuard]
  },
];

const routes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    children: itemRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
