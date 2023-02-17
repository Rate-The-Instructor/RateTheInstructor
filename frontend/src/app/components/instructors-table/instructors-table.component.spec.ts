import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsTableComponent } from './instructors-table.component';

describe('InstructorsTableComponent', () => {
  let component: InstructorsTableComponent;
  let fixture: ComponentFixture<InstructorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
