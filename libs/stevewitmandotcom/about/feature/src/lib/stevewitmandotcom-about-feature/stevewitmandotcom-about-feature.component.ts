import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'stevewitman-stevewitmandotcom-about-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stevewitmandotcom-about-feature.component.html',
  styleUrls: ['./stevewitmandotcom-about-feature.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [style({ opacity: 0 }), animate('400ms ease-in')]),
    ]),
  ],
})
export class StevewitmandotcomAboutFeatureComponent {}
