import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'swdc-shell-ui-layout-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './swdc-shell-ui-layout-header.component.html',
  styleUrls: ['./swdc-shell-ui-layout-header.component.scss'],
})
export class SwdcShellUiLayoutHeaderComponent {
  @Input() drawerOpen: boolean | undefined = false;
  @Output() toggleDrawer = new EventEmitter();
}
