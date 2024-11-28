import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsihologLandingComponent } from './psiholog-landing.component';

describe('PsihologLandingComponent', () => {
  let component: PsihologLandingComponent;
  let fixture: ComponentFixture<PsihologLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsihologLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PsihologLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
