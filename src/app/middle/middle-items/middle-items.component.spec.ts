import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleItemsComponent } from './middle-items.component';

describe('MiddleItemsComponent', () => {
  let component: MiddleItemsComponent;
  let fixture: ComponentFixture<MiddleItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
