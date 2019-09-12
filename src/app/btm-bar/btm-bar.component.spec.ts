import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtmBarComponent } from './btm-bar.component';

describe('BtmBarComponent', () => {
  let component: BtmBarComponent;
  let fixture: ComponentFixture<BtmBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtmBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtmBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
