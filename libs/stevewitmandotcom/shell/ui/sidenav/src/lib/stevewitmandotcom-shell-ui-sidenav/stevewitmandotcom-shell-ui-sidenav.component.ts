import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'stevewitman-stevewitmandotcom-shell-ui-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
  ],
  templateUrl: './stevewitmandotcom-shell-ui-sidenav.component.html',
  styleUrls: ['./stevewitmandotcom-shell-ui-sidenav.component.scss'],
})
export class StevewitmandotcomShellUiSidenavComponent implements AfterViewInit {
  @ViewChild('drawer') drawerRef!: MatSidenav;
  isHandset = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.isHandset = true;
        } else {
          this.isHandset = false;
          this.drawerRef.open();
        }
      });
  }

}
