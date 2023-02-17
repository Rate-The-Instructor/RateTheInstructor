import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundpageComponent } from './not-foundpage.component';

describe('NotFoundpageComponent', () => {
  let component: NotFoundpageComponent;
  let fixture: ComponentFixture<NotFoundpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
