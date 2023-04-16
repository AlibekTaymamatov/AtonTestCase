import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject, tap} from 'rxjs';
import {AuthUser, ResponseAuthUser} from '../models/user-auth.model';
import {environment} from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  public isAuth$ = new Subject<boolean>();
  private url = environment.api;

  public login(data: AuthUser): Observable<ResponseAuthUser> {
    return this.http.post<ResponseAuthUser>(this.url + 'login', data).pipe(
      tap((res: ResponseAuthUser) => {
        this.isAuth$.next(true);
        this.saveToken(res.token);
      })
    );
  }

  public register(data: AuthUser): Observable<ResponseAuthUser> {
    return this.http.post<ResponseAuthUser>(this.url + 'register', data);
  }

  private saveToken(token: string): void {
    localStorage.removeItem('token');
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token')!;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout() {
    return this.http.post(this.url + 'logout', null).pipe(
      tap({
        complete: () => {
          localStorage.clear();
          this.isAuth$.next(false);
        },
      })
    );
  }
}
