import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoPermissionComponent } from './bo-permission.component';

describe('BoPermissionComponent', () => {
  let component: BoPermissionComponent;
  let fixture: ComponentFixture<BoPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
