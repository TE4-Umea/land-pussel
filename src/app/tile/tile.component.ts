import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
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
export class TileComponent implements OnInit {
    tileElements: Element[] = []
    tileElementId: number[] = []
    tiles = new Array(9)
    userInputTileElements: HTMLInputElement[] = []
    correctTestAnswerId: number[] = []
    markedTiles: number[] = []
    scoreMultiplier: number = 1
    score: number = 0
    lives: number = 3
    randomCountryIndex: number = 0

    @Output() sendMessage = new EventEmitter()

    conditionToSend = 'end'
    countries = countries

    getRandomCountry() {
        this.randomCountryIndex = Math.floor(Math.random() * countries.length)
    }

    @ViewChild('form') form!: ElementRef

    ngOnInit(): void {
        this.getRandomCountry()
    }

    ngAfterViewInit(): void {
        this.correctTestAnswerId = countries[this.randomCountryIndex].easy
        console.log(this.correctTestAnswerId)
        this.tileElements = Array.from(this.form.nativeElement.children)
        this.tileElements.forEach((tile, id) => {
            tile.id = id.toString()
            Array.from(tile.children).forEach((element: Element, index) => {
                if (index === 0) {
                    const inputElement = element as HTMLInputElement
                    inputElement.id = 'tile' + id.toString()
                    inputElement.checked = false
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
            this.score += (100 * this.scoreMultiplier)
            this.scoreMultiplier += .15
            alert('Horay! :D')
            this.getRandomCountry()
        }
        else {
            this.lives--
            this.scoreMultiplier = 1
            alert('Oh no! D:')
            if (this.lives <= 0) {
                this.sendMessage.emit(this.conditionToSend)
            }
        }
        this.markedTiles = []
        this.userInputTileElements = []
        this.tileElementId = []
        this.ngAfterViewInit()
    }
}

