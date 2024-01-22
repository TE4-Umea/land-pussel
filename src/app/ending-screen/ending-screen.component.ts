import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-end',
    standalone: true,
    imports: [],
    templateUrl: './ending-screen.component.html',
    styleUrl: './ending-screen.component.css'
})
export class EndingScreenComponent {

    @Output() sendMessage = new EventEmitter()

    conditionToSendRestart = 'game'
    conditionToSendExit = 'start'


    onClickRestart() {
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.sendMessage.emit(this.conditionToSendExit)
    }
}
