import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollEditComponent } from './enroll-edit.component';

describe('EnrollEditComponent', () => {
  let component: EnrollEditComponent;
  let fixture: ComponentFixture<EnrollEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
