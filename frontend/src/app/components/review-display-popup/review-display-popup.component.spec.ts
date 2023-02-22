import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDisplayPopupComponent } from './review-display-popup.component';

describe('ReviewDisplayPopupComponent', () => {
  let component: ReviewDisplayPopupComponent;
  let fixture: ComponentFixture<ReviewDisplayPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewDisplayPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDisplayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
