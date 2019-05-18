import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInOutComponent } from './new-in-out.component';

describe('NewInOutComponent', () => {
  let component: NewInOutComponent;
  let fixture: ComponentFixture<NewInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
