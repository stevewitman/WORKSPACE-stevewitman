import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('@sw/swdc/about/feat-about-shell').then(
        (m) => m.swdcAboutFeatAboutShellRoutes
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@sw/swdc/contact/feat-contact-shell').then(
        (m) => m.swdcContactFeatContactShellRoutes
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
