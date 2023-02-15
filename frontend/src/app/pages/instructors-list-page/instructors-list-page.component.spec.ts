import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsListPageComponent } from './instructors-list-page.component';

describe('InstructorsListPageComponent', () => {
  let component: InstructorsListPageComponent;
  let fixture: ComponentFixture<InstructorsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
