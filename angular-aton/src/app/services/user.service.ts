import {Injectable} from '@angular/core';
import {UserList} from '../models/users.model';
import {User, UserInfo} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject, catchError, tap} from 'rxjs';
import {environment} from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {}

  public userInfo$ = new Subject<User>();
  private domen = environment.api;
  private path = 'users';
  private url = this.domen + this.path;


  public getUsers(pageNumber: Number, pageSize: Number): Observable<UserList> {
    return this.http.get<UserList>(this.url + `?page=${pageNumber}&per_page=${pageSize}`);
  }

  public getUserId(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.url + `/${id}`);
  }

  public addUser(data: User): Observable<User> {
    return this.http.post<User>(this.url, data, {headers:{'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'*'}})
  }

  public editUserId(data: User): Observable<User> {
    return this.http.put<User>(this.url + `/${data.id}`, data).pipe(
      tap({
        next: (user) => this.userInfo$.next(user),
      })
    );
  }

  public deleteUser(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
