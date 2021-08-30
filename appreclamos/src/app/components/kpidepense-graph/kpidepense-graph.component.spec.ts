import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpidepenseGraphComponent } from './kpidepense-graph.component';

describe('KpidepenseGraphComponent', () => {
  let component: KpidepenseGraphComponent;
  let fixture: ComponentFixture<KpidepenseGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpidepenseGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpidepenseGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
