import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'game', component: GameComponent }
];