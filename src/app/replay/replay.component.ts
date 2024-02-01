import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'

@Component({
    selector: 'app-replay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './replay.component.html',
    styleUrl: './replay.component.css'
})
export class ReplayComponent implements AfterViewInit {
    tiles = new Array(9)
    replay: [{ moves: number[], country: string, lives: number, score: number, multiplier: number }] = localStorage.getItem('latestReplay') ? JSON.parse(localStorage.getItem('latestReplay')!) : []
    frameIndex: number = -1
    tileElements: Element[] = []
    markedTiles: number[] = []
    isPlaying: boolean = false
    playbackSpeedMS: number = 500
    totalMovesCount: number = 0
    percentViewed: number = 0
    root = document.documentElement

    //TODO Lägga till index för varje runda som spelaren kan välja mellan 

    @ViewChild('form') form!: ElementRef

    clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max - 1)


    getPercentageViewed() {
        this.percentViewed = ((this.frameIndex + 1) / this.totalMovesCount) * 100   
        this.root.style.setProperty('--progress-bar-width', this.percentViewed + '%')
    }

    getTotalMovesCount() {
        for (let index = 0; index < this.replay.length; index++) {
            this.totalMovesCount++
        }
    }

    ngAfterViewInit(): void {
        this.tileElements = Array.from(this.form.nativeElement.children)
        this.getTotalMovesCount()
    }

    skipForward() {
        this.frameIndex++
        this.frameIndex = this.clamp(this.frameIndex, -1, this.totalMovesCount)
        this.getPercentageViewed()
        this.displayFrame()
    }

    skipBackward() {
        this.frameIndex--
        this.frameIndex = this.clamp(this.frameIndex, -1, this.totalMovesCount)
        this.getPercentageViewed()
        this.displayFrame()
    }

    rewind() {
        this.frameIndex = -1
        this.getPercentageViewed()
        this.displayFrame()
    }

    togglePlayPause() {
        this.isPlaying = !this.isPlaying
        const timer = window.setInterval(() => {
            if (this.isPlaying && this.frameIndex < this.totalMovesCount - 1) {
                this.play()
                this.root.style.setProperty('--play-paus', 'url(./assets/images/pause.png)')
            }
            else {
                clearInterval(timer)
                this.isPlaying = false
                this.root.style.setProperty('--play-paus', 'url(./assets/images/play.png)')
            }
        }, this.playbackSpeedMS)

    }

    play() {
        this.getPercentageViewed()
        this.skipForward()
        this.displayFrame()
    }

    displayFrame() {
        this.resetTiles()
        this.resetValues()
        this.saveMarkedTiles()
        this.fillInMarkedTiles()
    }

    resetTiles() {
        this.markedTiles.forEach((markedTileId) => {
            const tileLabel: Element = this.tileElements[markedTileId].children[0]
            tileLabel.classList.remove('tile-checked')
        })
    }

    resetValues() {
        this.markedTiles = []
    }

    saveMarkedTiles() {
        for (let index = 0; index < this.tileElements.length; index++) {
            if (this.replay[this.frameIndex].moves[index] || this.replay[this.frameIndex].moves[index] === 0) {
                this.markedTiles.push(this.replay[this.frameIndex].moves[index])
            }
        }
    }

    fillInMarkedTiles() {
        this.markedTiles.forEach((markedTileId) => {
            const tileLabel: Element = this.tileElements[markedTileId].children[0]
            tileLabel.classList.add('tile-checked')
        })
    }

    onClickHome() {
        console.log('Home')
    }
}
