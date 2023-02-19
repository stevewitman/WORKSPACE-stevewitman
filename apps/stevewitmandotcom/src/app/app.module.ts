import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StevewitmandotcomShellFeatAppShellComponent } from '@stevewitman/stevewitmandotcom/shell/feat-app-shell'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StevewitmandotcomShellFeatAppShellComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
