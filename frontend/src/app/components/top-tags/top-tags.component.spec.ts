import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTagsComponent } from './top-tags.component';

describe('TopTagsComponent', () => {
  let component: TopTagsComponent;
  let fixture: ComponentFixture<TopTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
