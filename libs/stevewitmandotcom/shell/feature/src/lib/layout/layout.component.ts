import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StevewitmandotcomShellUiHeaderComponent } from '@stevewitman/stevewitmandotcom/shell/ui/header'
import { StevewitmandotcomShellUiSidenavComponent } from '@stevewitman/stevewitmandotcom/shell/ui/sidenav'

@Component({
  selector: 'stevewitman-layout',
  standalone: true,
  imports: [
    CommonModule,
    StevewitmandotcomShellUiHeaderComponent,
    StevewitmandotcomShellUiSidenavComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
