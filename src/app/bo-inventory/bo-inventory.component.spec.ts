import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoInventoryComponent } from './bo-inventory.component';

describe('BoInventoryComponent', () => {
  let component: BoInventoryComponent;
  let fixture: ComponentFixture<BoInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
