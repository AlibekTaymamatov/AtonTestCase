import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {NzNotificationService} from 'ng-zorro-antd/notification';

/**
 *
 *
 * @export
 * @class Класс перехватчик для логирования
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private notificationService: NzNotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const startTime = new Date().getTime();
    return next.handle(req).pipe(
      tap({
        complete: () => {
          this.notificationService.success('Успех', 'Запрос выполнен успешно');
        },
        error: (err: HttpErrorResponse) => {
          this.notificationService.error('Ошибка', err.error.error);
        },
        finalize: () => {
          const endTime = new Date().getTime();
          const elapsedTime = endTime - startTime;
          this.notificationService.info('Уведомление', `Время ответа ${elapsedTime} мс`);
        },
      })
    );
  }
}