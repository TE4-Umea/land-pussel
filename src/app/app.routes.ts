import { Routes } from '@angular/router'
import { GameComponent } from './game/game.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    { path: 'game', component: GameComponent },
    { path: '', component: HomeComponent }
]