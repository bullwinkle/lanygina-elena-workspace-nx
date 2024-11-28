import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsihologContactsComponent } from './psiholog-contacts.component';

describe('PsihologContactsComponent', () => {
  let component: PsihologContactsComponent;
  let fixture: ComponentFixture<PsihologContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsihologContactsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PsihologContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
