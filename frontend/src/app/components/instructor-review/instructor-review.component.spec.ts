import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReviewComponent } from './instructor-review.component';

describe('InstructorReviewComponent', () => {
  let component: InstructorReviewComponent;
  let fixture: ComponentFixture<InstructorReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
