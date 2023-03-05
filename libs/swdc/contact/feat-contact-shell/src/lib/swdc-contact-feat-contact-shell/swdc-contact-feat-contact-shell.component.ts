import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'swdc-contact-feat-contact-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swdc-contact-feat-contact-shell.component.html',
  styleUrls: ['./swdc-contact-feat-contact-shell.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
    ]),
  ],
})
export class SwdcContactFeatContactShellComponent {}
