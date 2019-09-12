import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentBoardComponent } from './tournament-board/tournament-board.component';
import { FixturesBoardComponent } from './fixtures-board/fixtures-board.component';
import { PlayersBoardComponent } from './players-board/players-board.component';

const routes: Routes = [
  {path: '', redirectTo: '/tournament', pathMatch: 'full'},
  {path: 'tournament', component: TournamentBoardComponent},
  {path: 'fixtures', component: FixturesBoardComponent},
  {path: 'players', component: PlayersBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
