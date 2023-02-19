import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StevewitmandotcomShellUiLayoutHeaderComponent } from '@stevewitman/stevewitmandotcom/shell/ui-layout-header';
import { StevewitmandotcomShellUiLayoutSidenavComponent } from '@stevewitman/stevewitmandotcom/shell/ui-layout-sidenav';

@Component({
  selector: 'stevewitman-stevewitmandotcom-shell-feat-app-shell',
  standalone: true,
  imports: [
    CommonModule,
    StevewitmandotcomShellUiLayoutHeaderComponent,
    StevewitmandotcomShellUiLayoutSidenavComponent,
  ],
  templateUrl: './stevewitmandotcom-shell-feat-app-shell.component.html',
  styleUrls: ['./stevewitmandotcom-shell-feat-app-shell.component.scss'],
})
export class StevewitmandotcomShellFeatAppShellComponent
  implements AfterViewInit
{
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
