import { CommonModule } from '@angular/common'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
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
    topScores: number[] = [1, 2, 3]
    highscore: number[] = localStorage.getItem('highscore') ? JSON.parse(localStorage.getItem('highscore')!) : []
    oldHighscore: number[] = localStorage.getItem('oldHighscore') ? JSON.parse(localStorage.getItem('oldHighscore')!) : []
    condition = 'highscoreChart'

    setNameForHighscore() {

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
