import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleScreenComponent } from './sale-screen.component';

describe('SaleScreenComponent', () => {
  let component: SaleScreenComponent;
  let fixture: ComponentFixture<SaleScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
