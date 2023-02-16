import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTableComponent } from './review-table.component';

describe('ReviewTableComponent', () => {
  let component: ReviewTableComponent;
  let fixture: ComponentFixture<ReviewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
