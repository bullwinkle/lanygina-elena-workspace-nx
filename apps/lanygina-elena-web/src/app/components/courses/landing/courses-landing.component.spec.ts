import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesLandingComponent } from './courses-landing.component';

describe('CoursesLandingComponent', () => {
  let component: CoursesLandingComponent;
  let fixture: ComponentFixture<CoursesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
