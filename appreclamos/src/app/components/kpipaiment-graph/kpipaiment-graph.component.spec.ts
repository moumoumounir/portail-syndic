import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpipaimentGraphComponent } from './kpipaiment-graph.component';

describe('KpipaimentGraphComponent', () => {
  let component: KpipaimentGraphComponent;
  let fixture: ComponentFixture<KpipaimentGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpipaimentGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpipaimentGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
