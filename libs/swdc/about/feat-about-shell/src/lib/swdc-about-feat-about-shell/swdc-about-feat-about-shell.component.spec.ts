import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwdcAboutFeatAboutShellComponent } from './swdc-about-feat-about-shell.component';

describe('SwdcAboutFeatAboutShellComponent', () => {
  let component: SwdcAboutFeatAboutShellComponent;
  let fixture: ComponentFixture<SwdcAboutFeatAboutShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwdcAboutFeatAboutShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SwdcAboutFeatAboutShellComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
