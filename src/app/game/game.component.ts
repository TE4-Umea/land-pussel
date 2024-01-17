import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { ElementRef } from '@angular/core';

let tileCount = 9

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent {
  @ViewChild('form') myElement!: ElementRef;
  ngAfterViewInit(): void {
    console.log(this.myElement.nativeElement)
  }

  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
