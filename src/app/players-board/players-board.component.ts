import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../player-list';

@Component({
  selector: 'app-players-board',
  templateUrl: './players-board.component.html',
  styleUrls: ['./players-board.component.css']
})
export class PlayersBoardComponent implements OnInit {
  players: Player[];

  constructor() { }

  ngOnInit() {
    this.players = PLAYERS;
  }

}
