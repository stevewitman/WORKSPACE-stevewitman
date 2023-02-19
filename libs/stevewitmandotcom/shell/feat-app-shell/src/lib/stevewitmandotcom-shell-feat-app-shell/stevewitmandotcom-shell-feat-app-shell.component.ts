import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StevewitmandotcomShellUiHeaderComponent } from '@stevewitman/stevewitmandotcom/shell/ui/header';
import { StevewitmandotcomShellUiSidenavComponent } from '@stevewitman/stevewitmandotcom/shell/ui/sidenav';

@Component({
  selector: 'stevewitman-stevewitmandotcom-shell-feat-app-shell',
  standalone: true,
  imports: [
    CommonModule,
    StevewitmandotcomShellUiHeaderComponent,
    StevewitmandotcomShellUiSidenavComponent,
  ],
  templateUrl: './stevewitmandotcom-shell-feat-app-shell.component.html',
  styleUrls: ['./stevewitmandotcom-shell-feat-app-shell.component.scss'],
})
export class StevewitmandotcomShellFeatAppShellComponent implements AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
