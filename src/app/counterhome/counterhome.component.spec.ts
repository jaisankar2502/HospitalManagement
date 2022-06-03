import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterhomeComponent } from './counterhome.component';

describe('CounterhomeComponent', () => {
  let component: CounterhomeComponent;
  let fixture: ComponentFixture<CounterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
