import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineDetailComponent } from './discipline-detail.component';

describe('DisciplineDetailComponent', () => {
  let component: DisciplineDetailComponent;
  let fixture: ComponentFixture<DisciplineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
