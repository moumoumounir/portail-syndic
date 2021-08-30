import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiengagementGraphComponent } from './kpiengagement-graph.component';

describe('KpiengagementGraphComponent', () => {
  let component: KpiengagementGraphComponent;
  let fixture: ComponentFixture<KpiengagementGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiengagementGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiengagementGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
