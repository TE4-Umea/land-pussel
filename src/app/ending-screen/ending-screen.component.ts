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
    conditionToSendRestart = 'game'
    conditionToSendExit = 'start'
    topScores: number[] = [0, 1, 2]
    highscore: number[] = localStorage.getItem('highscore') ? JSON.parse(localStorage.getItem('highscore')!) : []
    oldHighscore: number[] = localStorage.getItem('oldHighscore') ? JSON.parse(localStorage.getItem('oldHighscore')!) : []
    highscoreNames: string[] = localStorage.getItem('highscoreNames') ? JSON.parse(localStorage.getItem('highscoreNames')!) : []
    highscoreNamesLocal: string[] = []
    nameIndex: number = 0
    condition = 'highscoreChart'

    @ViewChild('nameInput') nameInput!: ElementRef


    setNameForHighscore() {
        this.oldHighscore = [1]
        const nameInput: HTMLInputElement = this.nameInput.nativeElement
        this.highscore.forEach((score, index) => {
            this.oldHighscore.forEach((oldScore) => {
                alert(score.toString() + ' ' + oldScore.toString())
                if (score.toString() !== oldScore.toString()) {
                    this.nameIndex = index
                    this.highscoreNamesLocal[this.nameIndex] = nameInput.value
                    localStorage.setItem('highscoreNames', JSON.stringify(this.highscoreNamesLocal))
                }
            })
        })
        this.condition = 'highscoreChart'
    }

    ngOnInit(): void {
        if (this.oldHighscore.toString() !== this.highscore.toString()) {
            this.condition = 'inputHighscoreName'
        }
    }

    @Output() sendMessage = new EventEmitter()

    onClickRestart() {
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.sendMessage.emit(this.conditionToSendExit)
    }
}
