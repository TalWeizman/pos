import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XReportDialogComponent } from './x-report-dialog.component';

describe('XReportDialogComponent', () => {
  let component: XReportDialogComponent;
  let fixture: ComponentFixture<XReportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
