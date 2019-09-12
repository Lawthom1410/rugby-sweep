import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBoardComponent } from './tournament-board.component';

describe('TournamentBoardComponent', () => {
  let component: TournamentBoardComponent;
  let fixture: ComponentFixture<TournamentBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
