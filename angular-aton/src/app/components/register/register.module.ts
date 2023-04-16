import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSpinModule,
    NzIconModule,
    NzButtonModule,
  ],
})
export class RegisterModule {}
