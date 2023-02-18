import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomShellUiHeaderComponent } from './stevewitmandotcom-shell-ui-header.component';

describe('StevewitmandotcomShellUiHeaderComponent', () => {
  let component: StevewitmandotcomShellUiHeaderComponent;
  let fixture: ComponentFixture<StevewitmandotcomShellUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomShellUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StevewitmandotcomShellUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
