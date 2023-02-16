import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewPopupComponent } from './edit-review-popup.component';

describe('EditReviewPopupComponent', () => {
  let component: EditReviewPopupComponent;
  let fixture: ComponentFixture<EditReviewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReviewPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReviewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
