import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { GameComponent } from './game.component'

const routes: Routes = [
    { path: '', component: GameComponent }
]

@NgModule({
    declarations: [],
    imports: [
        GameComponent,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GameModule { }