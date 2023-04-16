import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info.component';
import {UserInfoRoutingModule} from './user-info-routing.module';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';

@NgModule({
  declarations: [UserInfoComponent],
  exports: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzAvatarModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule
  ],
})
export class UserInfoModule {}
