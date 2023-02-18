import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { stevewitmandotcomShellFeatureRoutes } from './lib.routes';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  imports: [CommonModule, RouterModule, LayoutComponent],
  exports: [LayoutComponent],
})
export class StevewitmandotcomShellFeatureModule {}
