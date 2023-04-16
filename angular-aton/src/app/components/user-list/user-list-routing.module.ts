import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list.component';
import { authGuard } from 'src/app/classes/auth.guard';


const itemRoutes: Routes = [
  {
    path: 'new-user',
    loadChildren: () =>
    import('../user-info/user-info.module').then(m => m.UserInfoModule),
    canMatch: [authGuard]
  },
  {
    path: 'user/:id',
    loadChildren: () =>
    import('../user-info/user-info.module').then(m => m.UserInfoModule),
    canMatch: [authGuard]
  }
];

const routes: Route[] = [
  {
    path: '',
    component: UserListComponent,
    children: itemRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}