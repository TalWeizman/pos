import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoCustomersComponent } from './bo-customers.component';

describe('BoCustomersComponent', () => {
  let component: BoCustomersComponent;
  let fixture: ComponentFixture<BoCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
