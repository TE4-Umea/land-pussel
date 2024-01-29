import { Component, EventEmitter, Output } from '@angular/core'
import { ButtonComponentComponent } from '../button-component/button-component.component'

@Component({
    selector: 'app-credits',
    standalone: true,
    imports: [ButtonComponentComponent],
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
