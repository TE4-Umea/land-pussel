import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core'

let id

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  tileElements: Element[] = []
  tiles = new Array(9)
  trueOrFalse = true

  japp = 'japp'

  @ViewChild('form') form!: ElementRef

  ngAfterViewInit(): void {
    this.tileElements = Array.from(this.form.nativeElement.children)
    this.tileElements.forEach((tile, index) => {
      tile.id = index.toString()
      console.log(tile.children)
      Array.from(tile.children).forEach((element: HTMLLabelElement) => {
        element.id = index.toString()
        element[htmlFor] = index.toString()
      })
      console.log(tile.id)
    })
  }
}
