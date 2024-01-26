import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-replay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './replay.component.html',
    styleUrl: './replay.component.css'
})
export class ReplayComponent {
    tiles = new Array(9)
    replay: [{ moves: number[], country: string, lives: number, score: number, multiplier: number }] = localStorage.getItem('latestReplay') ? JSON.parse(localStorage.getItem('latestReplay')!) : []
    frameIndex: number = 0

    skipForward() {
        this.frameIndex++
    }

    skipBackward() {
        this.frameIndex--
    }

    rewind() {
        this.frameIndex = 0
    }

    togglePlayPause() {

    }

    play() {
        console.log(this.replay[this.frameIndex])
    }

    onClickHome() {
        console.log('Home')
    }
}
