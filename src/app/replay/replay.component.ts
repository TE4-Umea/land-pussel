import { CommonModule } from '@angular/common';
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
}
