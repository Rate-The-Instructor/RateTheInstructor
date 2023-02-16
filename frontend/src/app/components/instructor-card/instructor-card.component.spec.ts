import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCardComponent } from './instructor-card.component';

describe('InstructorCardComponent', () => {
  let component: InstructorCardComponent;
  let fixture: ComponentFixture<InstructorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
