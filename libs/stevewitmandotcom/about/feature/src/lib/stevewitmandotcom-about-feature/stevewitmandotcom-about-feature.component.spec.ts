import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevewitmandotcomAboutFeatureComponent } from './stevewitmandotcom-about-feature.component';

describe('StevewitmandotcomAboutFeatureComponent', () => {
  let component: StevewitmandotcomAboutFeatureComponent;
  let fixture: ComponentFixture<StevewitmandotcomAboutFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StevewitmandotcomAboutFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StevewitmandotcomAboutFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
