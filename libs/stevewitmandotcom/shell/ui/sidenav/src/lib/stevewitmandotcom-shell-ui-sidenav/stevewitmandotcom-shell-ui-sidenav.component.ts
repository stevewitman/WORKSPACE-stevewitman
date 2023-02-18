import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
// import { map, Observable, shareReplay, Subscription } from 'rxjs';

@Component({
  selector: 'stevewitman-stevewitmandotcom-shell-ui-sidenav',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatListModule, MatSidenavModule],
  templateUrl: './stevewitmandotcom-shell-ui-sidenav.component.html',
  styleUrls: ['./stevewitmandotcom-shell-ui-sidenav.component.scss'],
})
export class StevewitmandotcomShellUiSidenavComponent implements OnInit, AfterViewInit {
  isHandset = true;
  // _isHandsetSubscription: Subscription | null = null;

  @ViewChild('drawer') drawerRef!: MatSidenav;


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
console.log('here');

  }

  ngAfterViewInit() {
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      // .pipe(
      //   map((result: BreakpointState) => result.matches),
      //   shareReplay()
      // )
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.isHandset = true;
          console.log('IsHandset:', this.isHandset);
        } else {
          this.isHandset = false;
          console.log('IsHandset:', this.isHandset);
          this.drawerRef.open();
        }
      });
  }
}
