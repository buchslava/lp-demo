import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericLoginComponent } from './generic-login/generic-login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GenericLoginComponent
  ],
  exports: [
    GenericLoginComponent
  ],
})
export class UiModule {}
