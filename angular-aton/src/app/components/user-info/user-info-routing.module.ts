import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UserInfoComponent} from './user-info.component';

const routes: Route[] = [
  {
    path: '',
    component: UserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInfoRoutingModule {}
