import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsihologAboutComponent } from './psiholog-about.component';

describe('PsihologAboutComponent', () => {
  let component: PsihologAboutComponent;
  let fixture: ComponentFixture<PsihologAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsihologAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PsihologAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
