import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
