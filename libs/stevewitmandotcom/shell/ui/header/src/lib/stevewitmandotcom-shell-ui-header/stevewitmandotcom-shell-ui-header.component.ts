import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'stevewitman-stevewitmandotcom-shell-ui-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './stevewitmandotcom-shell-ui-header.component.html',
  styleUrls: ['./stevewitmandotcom-shell-ui-header.component.scss'],
})
export class StevewitmandotcomShellUiHeaderComponent {
  @Input() drawerOpen: boolean | undefined = false;
  @Output() toggleDrawer = new EventEmitter();
}
