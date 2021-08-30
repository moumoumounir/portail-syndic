import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationlistUserComponent } from './notificationlist-user.component';

describe('NotificationlistUserComponent', () => {
  let component: NotificationlistUserComponent;
  let fixture: ComponentFixture<NotificationlistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationlistUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationlistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
