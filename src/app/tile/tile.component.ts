import { Component, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementRef } from '@angular/core'

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

    @ViewChild('form') form!: ElementRef

    ngAfterViewInit(): void {
        this.tileElements = Array.from(this.form.nativeElement.children)
        this.tileElements.forEach((tile, id) => {
            tile.id = id.toString()
            console.log(tile.children)
            Array.from(tile.children).forEach((element: Element, index) => {
                const labelElement = element as HTMLLabelElement
                if (index === 0) {
                    labelElement.id = id.toString()
                }
                else {
                    labelElement.htmlFor = id.toString()
                }
            })
            console.log(tile.id)
        })
    }
}
