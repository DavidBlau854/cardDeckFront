import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }
  leftPlayer: string = 'left'
  rightPlayer: string = 'right'

  ngOnInit(): void {
  }



}
