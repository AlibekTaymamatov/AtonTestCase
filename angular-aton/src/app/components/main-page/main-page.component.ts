import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnDestroy {
  public isCollapsed = false;
  public isAuth = false;
  private memSub?: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    // подписка на авторизацию
    this.memSub = this.authService.isAuth$.subscribe(i => (this.isAuth = i));
  }

  logout(): void {
    this.authService.logout().subscribe({
      complete: () => {
        this.router.navigate(['login']);
      },
    });
  }

  ngOnDestroy(): void {
    this.memSub?.unsubscribe();
  }
}
