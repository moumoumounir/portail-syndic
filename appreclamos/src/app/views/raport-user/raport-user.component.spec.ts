import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportUserComponent } from './raport-user.component';

describe('RaportUserComponent', () => {
  let component: RaportUserComponent;
  let fixture: ComponentFixture<RaportUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
