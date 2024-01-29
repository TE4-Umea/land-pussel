import { CommonModule } from '@angular/common'
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { TileComponent } from '../tile/tile.component'

import { ButtonComponentComponent } from '../button-component/button-component.component'

@Component({
    selector: 'app-end',
    standalone: true,
    imports: [CommonModule, TileComponent, ButtonComponentComponent,],
    templateUrl: './ending-screen.component.html',
    styleUrl: './ending-screen.component.css'
})
export class EndingScreenComponent implements OnInit {
    conditionToSendRestart: string = 'game'
    conditionToSendExit: string = 'start'
    conditionToSendReplay: string = 'replay'
    topScores: number[] = [0, 1, 2]
    highscore: [{ name: string, score: number }] = localStorage.getItem('highscore') ? JSON.parse(localStorage.getItem('highscore')!) : [{ name: ' ', score: 0 }, { name: ' ', score: 0 }, { name: ' ', score: 0 }]
    condition: string = 'highscoreChart'
    audio: HTMLAudioElement = new Audio()


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

    checkIfFromStart() {
        if (localStorage.getItem('score') === JSON.stringify(-1)) {
            this.condition = 'fromStartHighscore'
        }
    }

    ngOnInit(): void {
        this.fadeIn()
        this.checkIfFromStart()
        this.checkIfHighscore()
    }

    fadeOut() {
        let vol = 0.2
        const intervalId = setInterval(() => {
            if (vol > 0) {
                vol -= 0.01
                this.audio.volume = vol
            } else {
                clearInterval(intervalId)
            }
            if (vol < 0.01) {
                this.audio.pause()
            }
        }, 150)
    }

    fadeIn() {
        let vol = 0
        this.playSound()
        const intervalId = setInterval(() => {
            if (vol < 0.2) {
                vol += 0.01
                this.audio.volume = vol
            } else {
                clearInterval(intervalId)
            }
        }, 150)
    }

    @Output() sendMessage = new EventEmitter()

    onClickRestart() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendExit)
    }
    onClickReplay() {
        this.sendMessage.emit(this.conditionToSendReplay)
    playSound() {
        this.audio.src = '../../assets/music/Land-Puzzle-Death-Music.mp3'
        this.audio.volume = 0
        this.audio.load()
        this.audio.play()
    }
}
