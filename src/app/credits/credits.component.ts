import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ButtonComponentComponent } from '../button-component/button-component.component'

@Component({
    selector: 'app-credits',
    standalone: true,
    imports: [ButtonComponentComponent],
    templateUrl: './credits.component.html',
    styleUrl: './credits.component.css'
})
export class CreditsComponent implements OnInit {
    brs: number[] = [0, 1, 2, 3, 4, 5, 6, 7]
    @Output() sendMessage = new EventEmitter()
    audio: HTMLAudioElement = new Audio()

    conditionToSendStart: string = 'start'

    ngOnInit(): void {
        this.fadeIn()
    }

    onClickHome() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendStart)
    }

    fadeOut() {
        let vol = 0.2
        const intervalId = setInterval(() => {
            if (vol > 0) {
                vol = Math.max(0, vol - 0.01)
                this.audio.volume = vol
                if (vol < 0.02) {
                    this.audio.pause()
                }
            } else {
                clearInterval(intervalId)
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

    playSound() {
        this.audio.src = '../../assets/music/Land-Puzzle-Start-Menu.mp3'
        this.audio.volume = 0
        this.audio.load()
        this.audio.play()
    }
}
