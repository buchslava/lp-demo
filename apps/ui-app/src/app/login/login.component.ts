import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GenericLoginComponent, GenericLoginAuthService } from '@lp-demo/ui';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent extends GenericLoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authenticationService: GenericLoginAuthService
  ) {
    super(router, authenticationService);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getAuthUrl(): string {
    return '/api/users/authenticate';
  }

  getLoginForm(): FormGroup {
    return this.loginForm;
  }

  getUserField(): string {
    return 'username';
  }

  getPasswordField(): string {
    return 'password';
  }

  getDefaultUrl(): string {
    return '/';
  }
}
