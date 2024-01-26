import { Component, EventEmitter, Output } from '@angular/core'
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
export class HomeComponent {

    @Output() sendMessage = new EventEmitter()

    conditionToSendGame: string = 'game'
    conditionToSendCredits: string = 'credits'

    onClickStart() {
        this.sendMessage.emit(this.conditionToSendGame)
    }
    onClickCredits() {
        this.sendMessage.emit(this.conditionToSendCredits)
    }
}
