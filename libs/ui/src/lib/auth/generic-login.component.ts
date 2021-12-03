import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { catchError, first } from 'rxjs/operators';
import { GenericLoginAuthService } from './generic-login-auth.service';
import { of } from 'rxjs';

export abstract class GenericLoginComponent {
  loading = false;
  submitted = false;
  error = '';

  constructor(
    public router: Router,
    public authenticationService: GenericLoginAuthService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([this.getDefaultUrl()]);
    }
  }

  abstract getAuthUrl(): string;

  abstract getLoginForm(): FormGroup;

  abstract getUserField(): string;

  abstract getPasswordField(): string;

  abstract getDefaultUrl(): string;

  get f() {
    return this.getLoginForm().controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.getLoginForm().invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(
        this.f[this.getUserField()].value,
        this.f[this.getPasswordField()].value,
        this.getAuthUrl()
      )
      .pipe(
        first(),
        catchError((error) => {
          this.error = error;
          this.loading = false;
          return of(error);
        })
      )
      .subscribe(() => {
        this.router.navigate([this.getDefaultUrl()]);
      });
  }
}
