import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { } from '@storybook/angular'
import { ReactiveFormsModule } from '@angular/forms'

import { TileComponent } from '../tile/tile.component'
import { HomeComponent } from '../home/home.component'
import { EndingScreenComponent } from '../ending-screen/ending-screen.component'
import { ReplayComponent } from '../replay/replay.component'


@Component({
    selector: 'app-game',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, TileComponent, HomeComponent, EndingScreenComponent, ReplayComponent],
    templateUrl: './game.component.html',
    styleUrl: './game.component.css'
})

export class GameComponent {

    condition: string = 'start'

    getMsgFromHome($event: string) { this.condition = $event }
    getMsgFromEndingScreen($event: string) { this.condition = $event }
    getMsgFromTile($event: string) { this.condition = $event }
    getMsgFromReplay($event: string) { this.condition = $event }
}
