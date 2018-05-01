import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoItemsComponent } from './bo-items.component';

describe('BoItemsComponent', () => {
  let component: BoItemsComponent;
  let fixture: ComponentFixture<BoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
