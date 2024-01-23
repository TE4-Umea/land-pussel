import { Component, EventEmitter, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    @Output() sendMessage = new EventEmitter()

    conditionToSend = 'game'

    onClickStart() {
        this.sendMessage.emit(this.conditionToSend)
    }
}
