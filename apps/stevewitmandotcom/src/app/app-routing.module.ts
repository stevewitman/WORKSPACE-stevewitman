import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('@stevewitman/stevewitmandotcom/about/feat-about-shell').then(
        (m) => m.stevewitmandotcomAboutFeatAboutShellRoutes
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
