import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloggedComponent } from './userlogged.component';

describe('UserloggedComponent', () => {
  let component: UserloggedComponent;
  let fixture: ComponentFixture<UserloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
