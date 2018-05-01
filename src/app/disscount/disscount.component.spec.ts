import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisscountComponent } from './disscount.component';

describe('DisscountComponent', () => {
  let component: DisscountComponent;
  let fixture: ComponentFixture<DisscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
