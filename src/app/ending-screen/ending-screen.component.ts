import { CommonModule } from '@angular/common'
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { TileComponent } from '../tile/tile.component'

@Component({
    selector: 'app-end',
    standalone: true,
    imports: [CommonModule, TileComponent],
    templateUrl: './ending-screen.component.html',
    styleUrl: './ending-screen.component.css'
})
export class EndingScreenComponent implements OnInit {
    conditionToSendRestart: string = 'game'
    conditionToSendExit: string = 'start'
    topScores: number[] = [0, 1, 2]
    highscore: [{ name: string, score: number }] = localStorage.getItem('highscore') ? JSON.parse(localStorage.getItem('highscore')!) : [{ name: ' ', score: 0 }, { name: ' ', score: 0 }, { name: ' ', score: 0 }]
    condition: string = 'highscoreChart'

    @ViewChild('nameInput') nameInput!: ElementRef

    sortHighscore() {
        const score: number = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')!) : 0
        this.highscore.push({ name: this.setNameForHighscore().toUpperCase(), score: score })
        this.highscore.sort((a, b) => b.score - a.score)
        if (this.highscore.length > 3) {
            this.highscore.pop()
        }
        localStorage.setItem('highscore', JSON.stringify(this.highscore))
        this.condition = 'highscoreChart'
    }

    setNameForHighscore() {
        const nameInput: HTMLInputElement = this.nameInput.nativeElement
        return nameInput.value
    }

    checkIfHighscore() {
        this.highscore.forEach((element) => {
            if (element.score < JSON.parse(localStorage.getItem('score')!)) {
                this.condition = 'inputHighscoreName'
            }
        })
    }

    ngOnInit(): void {
        this.checkIfHighscore()
    }

    @Output() sendMessage = new EventEmitter()

    onClickRestart() {
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.sendMessage.emit(this.conditionToSendExit)
    }
}
