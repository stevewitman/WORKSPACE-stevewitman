import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwdcShellUiLayoutHeaderComponent } from './swdc-shell-ui-layout-header.component';

describe('SwdcShellUiLayoutHeaderComponent', () => {
  let component: SwdcShellUiLayoutHeaderComponent;
  let fixture: ComponentFixture<SwdcShellUiLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwdcShellUiLayoutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SwdcShellUiLayoutHeaderComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
