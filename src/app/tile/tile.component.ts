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
    tileElementId: number[] = []
    tiles = new Array(9)
    inputTileElements: HTMLInputElement[] = []
    correctTestAnswerId: number[] = [1, 4, 7]
    markedTiles: string[] = []

    @ViewChild('form') form!: ElementRef

    ngAfterViewInit(): void {
        this.tileElements = Array.from(this.form.nativeElement.children)
        this.tileElements.forEach((tile, id) => {
            tile.id = id.toString()
            Array.from(tile.children).forEach((element: Element, index) => {
                if (index === 0) {
                    const inputElement = element as HTMLInputElement
                    inputElement.id = 'tile' + id.toString()
                    this.inputTileElements.push(inputElement)
                    this.tileElementId.push(id)
                }
                else {
                    const labelElement = element as HTMLLabelElement
                    labelElement.htmlFor = 'tile' + id.toString()
                }
            })
        })
    }
    onCheckConfirm() {
        console.log(this.tileElementId)
        this.tileElementId.forEach((id) => {
            if (this.correctTestAnswerId.includes(id) && this.inputTileElements[id].checked) {
                console.log(id)
            }
        })
    }
}
