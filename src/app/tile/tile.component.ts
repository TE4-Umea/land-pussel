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
            Array.from(tile.children).forEach((element: Element, index) => {
                if (index === 0) {
                    const inputElement = element as HTMLInputElement
                    inputElement.id = 'tile' + id.toString()
                    console.log(inputElement.checked)
                }
                else {
                    const labelElement = element as HTMLLabelElement
                    labelElement.htmlFor = 'tile' + id.toString()
                }
            })
        })
    }
}
