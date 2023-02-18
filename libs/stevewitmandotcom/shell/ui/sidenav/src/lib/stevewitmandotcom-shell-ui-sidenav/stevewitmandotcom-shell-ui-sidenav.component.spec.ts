import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomShellUiSidenavComponent } from './stevewitmandotcom-shell-ui-sidenav.component';

describe('StevewitmandotcomShellUiSidenavComponent', () => {
  let component: StevewitmandotcomShellUiSidenavComponent;
  let fixture: ComponentFixture<StevewitmandotcomShellUiSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomShellUiSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StevewitmandotcomShellUiSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
