import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@lp-demo/data';
import { GenericLoginAuthService } from '@lp-demo/ui';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser!: User;

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
