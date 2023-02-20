import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwdcShellUiLayoutHeaderComponent } from '@sw/swdc/shell/ui-layout-header';
import { SwdcShellUiLayoutSidenavComponent } from '@sw/swdc/shell/ui-layout-sidenav';

@Component({
  selector: 'swdc-shell-feat-layout',
  standalone: true,
  imports: [
    CommonModule,
    SwdcShellUiLayoutHeaderComponent,
    SwdcShellUiLayoutSidenavComponent,
  ],
  templateUrl: './swdc-shell-feat-layout.component.html',
  styleUrls: ['./swdc-shell-feat-layout.component.scss'],
})
export class SwdcShellFeatLayoutComponent
  implements AfterViewInit
{
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
