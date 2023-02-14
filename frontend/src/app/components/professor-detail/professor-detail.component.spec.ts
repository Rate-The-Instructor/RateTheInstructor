import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDetailComponent } from './professor-detail.component';

describe('ProfessorDetailComponent', () => {
  let component: ProfessorDetailComponent;
  let fixture: ComponentFixture<ProfessorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
