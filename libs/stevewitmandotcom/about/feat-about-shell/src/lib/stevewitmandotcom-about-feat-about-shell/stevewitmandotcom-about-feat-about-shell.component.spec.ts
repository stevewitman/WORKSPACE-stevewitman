import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomAboutFeatAboutShellComponent } from './stevewitmandotcom-about-feat-about-shell.component';

describe('StevewitmandotcomAboutFeatAboutShellComponent', () => {
  let component: StevewitmandotcomAboutFeatAboutShellComponent;
  let fixture: ComponentFixture<StevewitmandotcomAboutFeatAboutShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomAboutFeatAboutShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StevewitmandotcomAboutFeatAboutShellComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
