import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-credits',
    standalone: true,
    imports: [],
    templateUrl: './credits.component.html',
    styleUrl: './credits.component.css'
})
export class CreditsComponent {
    @Output() sendMessage = new EventEmitter()

    conditionToSendStart: string = 'start'

    onClickHome() {
        this.sendMessage.emit(this.conditionToSendStart)
    }
}
