import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomShellFeatAppShellComponent } from './stevewitmandotcom-shell-feat-app-shell.component';

describe('StevewitmandotcomShellFeatAppShellComponent', () => {
  let component: StevewitmandotcomShellFeatAppShellComponent;
  let fixture: ComponentFixture<StevewitmandotcomShellFeatAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomShellFeatAppShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StevewitmandotcomShellFeatAppShellComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
