import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwdcShellUiLayoutSidenavComponent } from './swdc-shell-ui-layout-sidenav.component';

describe('SwdcShellUiLayoutSidenavComponent', () => {
  let component: SwdcShellUiLayoutSidenavComponent;
  let fixture: ComponentFixture<SwdcShellUiLayoutSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwdcShellUiLayoutSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SwdcShellUiLayoutSidenavComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
