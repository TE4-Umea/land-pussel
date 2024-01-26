import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { } from '@storybook/angular'
import { ReactiveFormsModule } from '@angular/forms'
import countries from '../../assets/countries.json'

import { TileComponent } from '../tile/tile.component'
import { HomeComponent } from '../home/home.component'
import { EndingScreenComponent } from '../ending-screen/ending-screen.component'
import { CreditsComponent } from '../credits/credits.component'

@Component({
    selector: 'app-game',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, TileComponent, HomeComponent, EndingScreenComponent, CreditsComponent],
    templateUrl: './game.component.html',
    styleUrl: './game.component.css'
})

export class GameComponent {
    countries = countries

    condition = 'start'

    getMsgFromHome($event: string) { this.condition = $event }
    getMsgFromEndingScreen($event: string) { this.condition = $event }
    getMsgFromTile($event: string) { this.condition = $event }
    getMsgFromCredits($event: string) { this.condition = $event }

}
