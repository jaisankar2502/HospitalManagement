import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeappointmentComponent } from './homeappointment.component';

describe('HomeappointmentComponent', () => {
  let component: HomeappointmentComponent;
  let fixture: ComponentFixture<HomeappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
