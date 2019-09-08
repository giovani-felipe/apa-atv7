import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNewComponent } from './registration-new.component';

describe('RegistrationNewComponent', () => {
  let component: RegistrationNewComponent;
  let fixture: ComponentFixture<RegistrationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
