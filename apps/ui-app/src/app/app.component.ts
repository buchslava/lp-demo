import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models';
import { GenericLoginAuthService } from '@lp-demo/ui';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  //@ts-ignore
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: GenericLoginAuthService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
