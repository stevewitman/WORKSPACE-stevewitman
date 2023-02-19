import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomShellUiLayoutHeaderComponent } from './stevewitmandotcom-shell-ui-layout-header.component';

describe('StevewitmandotcomShellUiLayoutHeaderComponent', () => {
  let component: StevewitmandotcomShellUiLayoutHeaderComponent;
  let fixture: ComponentFixture<StevewitmandotcomShellUiLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomShellUiLayoutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StevewitmandotcomShellUiLayoutHeaderComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
