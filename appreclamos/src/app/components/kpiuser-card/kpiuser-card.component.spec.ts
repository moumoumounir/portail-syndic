import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiuserCardComponent } from './kpiuser-card.component';

describe('KpiuserCardComponent', () => {
  let component: KpiuserCardComponent;
  let fixture: ComponentFixture<KpiuserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiuserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiuserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
