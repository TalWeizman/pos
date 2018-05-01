import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoSalesComponent } from './bo-sales.component';

describe('BoSalesComponent', () => {
  let component: BoSalesComponent;
  let fixture: ComponentFixture<BoSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
