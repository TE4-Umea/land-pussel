import { Routes } from '@angular/router'

export const routes: Routes = [
    { path: '', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
]