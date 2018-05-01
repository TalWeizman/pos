import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoCategoriesComponent } from './bo-categories.component';

describe('BoCategoriesComponent', () => {
  let component: BoCategoriesComponent;
  let fixture: ComponentFixture<BoCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
