import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwdcShellFeatLayoutComponent } from './swdc-shell-feat-layout.component';

describe('SwdcShellFeatLayoutComponent', () => {
  let component: SwdcShellFeatLayoutComponent;
  let fixture: ComponentFixture<SwdcShellFeatLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwdcShellFeatLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SwdcShellFeatLayoutComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
