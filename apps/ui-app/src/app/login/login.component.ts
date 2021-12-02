import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GenericLoginComponent, GenericLoginAuthService } from '@lp-demo/ui';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent extends GenericLoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
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

  getLoginForm(): FormGroup {
    return this.loginForm;
  }

  getUserField(): string {
    return 'username';
  }

  getPasswordField(): string {
    return 'password';
  }

  getReturnUrl(): string {
    return this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getDefaultUrl(): string {
    return '/';
  }
}
