import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwdcContactFeatContactShellComponent } from './swdc-contact-feat-contact-shell.component';

describe('SwdcContactFeatContactShellComponent', () => {
  let component: SwdcContactFeatContactShellComponent;
  let fixture: ComponentFixture<SwdcContactFeatContactShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwdcContactFeatContactShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SwdcContactFeatContactShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
