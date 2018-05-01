import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDialogComponent } from './cash-dialog.component';

describe('CashDialogComponent', () => {
  let component: CashDialogComponent;
  let fixture: ComponentFixture<CashDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
