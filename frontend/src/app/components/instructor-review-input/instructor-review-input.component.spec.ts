import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReviewInputComponent } from './instructor-review-input.component';

describe('InstructorReviewInputComponent', () => {
  let component: InstructorReviewInputComponent;
  let fixture: ComponentFixture<InstructorReviewInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorReviewInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorReviewInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
