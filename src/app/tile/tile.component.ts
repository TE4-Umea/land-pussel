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
    tileElementId: number[] = []
    tiles = new Array(9)
    userSelectedInputTiles: HTMLInputElement[] = []
    correctTestAnswerId: number[] = []
    scoreMultiplier: number = 1
    score: number = 0
    lives: number = 3
    randomCountryIndex: number = 0
    markedTiles: number[] = []

    @Output() sendMessage = new EventEmitter()

    scoreToSend: number = 0
    conditionToSend = 'end'
    conditionToSendStart = 'start'
    countries = countries

    getRandomCountry() {
        this.randomCountryIndex = Math.floor(Math.random() * countries.length)
    }

    @ViewChild('form') form!: ElementRef
    @ViewChild('snackbar') snackbar!: ElementRef

    showSnackbar(message: string) {
        const snackbarHTML: Element = this.snackbar.nativeElement
        snackbarHTML.innerHTML = message
        snackbarHTML.className = 'show'
        setTimeout(function () {
            snackbarHTML.className = snackbarHTML.className.replace('show', '')
        }, 3000)
    }

    ngOnInit(): void {
        this.getRandomCountry()
    }

    ngAfterViewInit(): void {
        this.correctTestAnswerId = this.getCorrectTestAnswerId()
        const tileElements: Element[] = Array.from(this.form.nativeElement.children)
        tileElements.forEach((tile, id) => {
            tile.id = id.toString()
            Array.from(tile.children).forEach((element: Element, index) => {
                if (index === 0) {
                    this.setupTileInputElement(element, id)
                }
                else {
                    this.setupTileLabelElement(element, id)
                }
            })
        })
    }

    getCorrectTestAnswerId(): number[] {
        return countries[this.randomCountryIndex].easy
    }

    setupTileInputElement(element: Element, id: number) {
        const inputElement = element as HTMLInputElement
        inputElement.id = 'tile' + id.toString()
        inputElement.checked = false
        this.userSelectedInputTiles.push(inputElement)
        this.tileElementId.push(id)
    }

    setupTileLabelElement(element: Element, id: number) {
        const labelElement = element as HTMLLabelElement
        labelElement.htmlFor = 'tile' + id.toString()
    }

    onCheckConfirm() {
        this.tileElementId.forEach((id) => {
            if (this.userSelectedInputTiles[id].checked) {
                this.markedTiles.push(id)
            }
        })
        if (this.markedTiles.toString() === this.correctTestAnswerId.toString()) {
            this.score += (100 * this.scoreMultiplier)
            this.scoreMultiplier += .15
            this.showSnackbar('Horay! :D')
            this.getRandomCountry()
        }
        else {
            this.lives--
            this.scoreMultiplier = 1
            this.showSnackbar('Oh no! D:')
            if (this.lives <= 0) {
                this.scoreToSend = this.score
                this.sendMessage.emit(this.conditionToSend)
                this.sendMessage.emit(this.scoreToSend)
            }
        }
        this.resetValues()
    }
    resetValues() {
        this.markedTiles = []
        this.userSelectedInputTiles = []
        this.tileElementId = []
        this.ngAfterViewInit()
    }
    onClickRestart() {
        this.getRandomCountry()
        this.lives = 3
        this.score = 0
        this.scoreMultiplier = 1
        this.resetValues()
    }
    onClickHome() {
        this.sendMessage.emit(this.conditionToSendStart)
    }
}

