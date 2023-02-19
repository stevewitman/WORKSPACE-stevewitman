import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomShellUiLayoutSidenavComponent } from './stevewitmandotcom-shell-ui-layout-sidenav.component';

describe('StevewitmandotcomShellUiLayoutSidenavComponent', () => {
  let component: StevewitmandotcomShellUiLayoutSidenavComponent;
  let fixture: ComponentFixture<StevewitmandotcomShellUiLayoutSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomShellUiLayoutSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StevewitmandotcomShellUiLayoutSidenavComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
