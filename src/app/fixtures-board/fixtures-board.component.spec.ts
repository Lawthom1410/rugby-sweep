import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesBoardComponent } from './fixtures-board.component';

describe('FixturesBoardComponent', () => {
  let component: FixturesBoardComponent;
  let fixture: ComponentFixture<FixturesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
