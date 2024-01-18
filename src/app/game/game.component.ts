import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { } from '@storybook/angular'
import { ReactiveFormsModule } from '@angular/forms'
import { ElementRef } from '@angular/core'
import { TileComponent } from '../tile/tile.component'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, TileComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent {
  tileElements: Element[] = []
  tiles = new Array(9)
  trueOrFalse = true

  @ViewChild('form') form!: ElementRef

  ngAfterViewInit(): void {
    this.tileElements = Array.from(this.form.nativeElement.children)
    let index = 0
    this.tileElements.forEach(tile => {
      tile.id = index.toString()
      console.log(tile.children)
      index++
      console.log(tile.id)
    })
  }
}
