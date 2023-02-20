import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'swdc-about-feat-about-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swdc-about-feat-about-shell.component.html',
  styleUrls: ['./swdc-about-feat-about-shell.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
    ]),
  ],
})
export class SwdcAboutFeatAboutShellComponent {}
