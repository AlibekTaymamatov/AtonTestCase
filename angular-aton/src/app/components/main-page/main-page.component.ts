import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  isCollapsed = false;
  isAuth = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    this.authService.isAuth$.subscribe(i => (this.isAuth = i));
  }

  logout(): void {
    this.authService.logout().subscribe({
      complete: () => {
        this.router.navigate(['login']);
      },
    });
  }
}
