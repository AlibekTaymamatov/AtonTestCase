import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {LoggingInterceptor} from './classes/logging.interceptor';

import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzConfig, NZ_CONFIG} from 'ng-zorro-antd/core/config';

registerLocaleData(en);

/** Настройка уведомления*/
const ngZorroConfig: NzConfig = {
  notification: {nzDuration: 5000, nzPlacement: 'bottomRight', nzMaxStack: 3},
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzNotificationModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
