import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainlistUserComponent } from './complainlist-user.component';

describe('ComplainlistUserComponent', () => {
  let component: ComplainlistUserComponent;
  let fixture: ComponentFixture<ComplainlistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainlistUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
