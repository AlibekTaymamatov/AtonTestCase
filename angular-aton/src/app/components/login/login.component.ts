import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthUser} from 'src/app/models/user-auth.model';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public formData!: UntypedFormGroup;
  public isSpinning = false;
  private memSub?: Subscription;

  ngOnInit(): void {
    this.formData = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    this.isSpinning = true;
    this.memSub = this.authService
      .login(this.formData.value as AuthUser)
      .subscribe({
        complete: () => {
          this.isSpinning = false;
          this.router.navigate(['users']);
        },
        error: () => (this.isSpinning = false),
      });
  }

  ngOnDestroy(): void {
    this.memSub?.unsubscribe();
  }
}
