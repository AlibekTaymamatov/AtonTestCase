import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {AuthUser} from 'src/app/models/user-auth.model';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
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
      .register(this.formData.value as AuthUser)
      .subscribe({
        complete: () => {
          this.isSpinning = false;
          this.router.navigate(['login']);
        },
        error: () => (this.isSpinning = false),
      });
  }

  ngOnDestroy(): void {
    this.memSub?.unsubscribe();
  }
}
