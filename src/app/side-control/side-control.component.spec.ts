import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideControlComponent } from './side-control.component';

describe('SideControlComponent', () => {
  let component: SideControlComponent;
  let fixture: ComponentFixture<SideControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
