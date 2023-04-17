import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list.component';
import {UserListRoutingModule} from './user-list-routing.module';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzSpinModule} from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [UserListComponent],
  exports: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzAvatarModule,
    NzButtonModule,
    NzPaginationModule,
    NzSpinModule,
  ],
})
export class UserListModule {}
