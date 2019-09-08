import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineNewComponent } from './discipline-new.component';

describe('DisciplineNewComponent', () => {
  let component: DisciplineNewComponent;
  let fixture: ComponentFixture<DisciplineNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
