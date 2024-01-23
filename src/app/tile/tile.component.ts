import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementRef } from '@angular/core'
import countries from '../../assets/countries.json'

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
    userInputTileElements: HTMLInputElement[] = []
    correctTestAnswerId: number[] = []
    markedTiles: number[] = []
    scoreMultiplier = 1  // TODO: implement score multiplier that increases with each correct answer

    @Output() sendMessage = new EventEmitter()

    conditionToSend = 'end'
    conditionToSendStart = 'start'

    countries = countries

    randomCountryIndex = Math.floor(Math.random() * countries.length)

    @ViewChild('form') form!: ElementRef

    ngAfterViewInit(): void {
        this.correctTestAnswerId = countries[this.randomCountryIndex].easy

        this.tileElements = Array.from(this.form.nativeElement.children)
        this.tileElements.forEach((tile, id) => {
            tile.id = id.toString()
            Array.from(tile.children).forEach((element: Element, index) => {
                if (index === 0) {
                    const inputElement = element as HTMLInputElement
                    inputElement.id = 'tile' + id.toString()
                    this.userInputTileElements.push(inputElement)
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
        this.tileElementId.forEach((id) => {
            if (this.userInputTileElements[id].checked) {
                this.markedTiles.push(id)
            }
        })
        if (this.markedTiles.toString() === this.correctTestAnswerId.toString()) {
            alert('Horay! :D')
        }
        else {
            this.sendMessage.emit(this.conditionToSend)
        }
        this.markedTiles = []
    }
    onClickHome() {
        this.sendMessage.emit(this.conditionToSendStart)
    }
}

