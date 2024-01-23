import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { TileComponent } from '../tile/tile.component'

@Component({
    selector: 'app-end',
    standalone: true,
    imports: [CommonModule, TileComponent],
    templateUrl: './ending-screen.component.html',
    styleUrl: './ending-screen.component.css'
})
export class EndingScreenComponent {
    topScores: number[] = [1, 2, 3]
    condition = 'highscoreChart'
    score: number = 0

    @Output() sendMessage = new EventEmitter()

    conditionToSendRestart = 'game'
    conditionToSendExit = 'start'


    onClickRestart() {
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.sendMessage.emit(this.conditionToSendExit)
    }
    getMsgFromTile($event: number) { this.score = $event }
}
