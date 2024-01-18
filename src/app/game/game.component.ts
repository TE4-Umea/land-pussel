import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { } from '@storybook/angular'
import { ReactiveFormsModule } from '@angular/forms'
import { TileComponent } from '../tile/tile.component'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, TileComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent {
}
