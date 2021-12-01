import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GenericLoginAuthService } from '../generic-login-auth.service';

export abstract class GenericLoginComponent {
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: GenericLoginAuthService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([this.getDefaultUrl()]);
    }
  }

  abstract getLoginForm(): FormGroup;

  abstract getUserField(): string;

  abstract getPasswordField(): string;

  abstract getReturnUrl(): string;

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
        this.f[this.getPasswordField()].value
      )
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.getReturnUrl()]);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
