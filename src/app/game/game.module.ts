import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { GameComponent } from './game.component'
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
    { path: '', component: GameComponent }
]
@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        GameComponent,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GameModule { }