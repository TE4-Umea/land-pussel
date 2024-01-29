import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

import { ButtonComponentComponent } from '../button-component/button-component.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, ButtonComponentComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    @Output() sendMessage = new EventEmitter()

    conditionToSend: string = 'game'
    conditionToSendGame: string = 'game'
    conditionToSendCredits: string = 'credits'
    conditionToSendEnd: string = 'end'
    audio: HTMLAudioElement = new Audio()
    interval: number = 200

    ngOnInit(): void {
        this.fadeIn()
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

    onClickStart() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendGame)
    }
    onClickCredits() {
        this.sendMessage.emit(this.conditionToSendCredits)
    }
    onClickHighscore() {
        this.fadeOut()
        localStorage.setItem('score', JSON.stringify(-1))
        this.sendMessage.emit(this.conditionToSendEnd)
    }

    playSound() {
        this.audio.src = '../../assets/music/Land-Puzzle-Start-Menu.mp3'
        this.audio.volume = 0
        this.audio.load()
        this.audio.play()
    }
}
