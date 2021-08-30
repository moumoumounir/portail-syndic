import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiimpayeGraphComponent } from './kpiimpaye-graph.component';

describe('KpiimpayeGraphComponent', () => {
  let component: KpiimpayeGraphComponent;
  let fixture: ComponentFixture<KpiimpayeGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiimpayeGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiimpayeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
