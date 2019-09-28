import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollNewComponent } from './enroll-new.component';

describe('EnrollNewComponent', () => {
  let component: EnrollNewComponent;
  let fixture: ComponentFixture<EnrollNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
