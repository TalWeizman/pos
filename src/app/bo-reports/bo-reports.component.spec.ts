import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoReportsComponent } from './bo-reports.component';

describe('BoReportsComponent', () => {
  let component: BoReportsComponent;
  let fixture: ComponentFixture<BoReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
