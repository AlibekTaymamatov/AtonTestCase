import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}