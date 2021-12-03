import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@lp-demo/ui';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
