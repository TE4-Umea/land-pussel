import { CommonModule } from '@angular/common'
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { TileComponent } from '../tile/tile.component'

import { ButtonComponentComponent } from '../button-component/button-component.component'
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
    selector: 'app-end',
    standalone: true,
    imports: [CommonModule, TileComponent, ButtonComponentComponent,],
    templateUrl: './ending-screen.component.html',
    styleUrl: './ending-screen.component.css'
})
export class EndingScreenComponent implements OnInit {
    conditionToSendRestart: string = 'game'
    conditionToSendExit: string = 'start'
    conditionToSendReplay: string = 'replay'
    topScores: number[] = [0, 1, 2]
    scores: number[] = []
    names: string[] = []
    condition: string = 'highscoreChart'
    audio: HTMLAudioElement = new Audio()
    url = 'http://jupiter.umea-ntig.se:6900/'

    constructor(private http: HttpClient) { }

    async getHighscoreFromDatabase() {
        interface ScoreData {
            id: number;
            name: string;
            score: number;
        }
        interface ApiResponse {
            data: ScoreData[];
        }
        await this.http.get<ApiResponse>(this.url + 'getHighscore').subscribe(response => {
            this.names = response.data.map(item => item.name)
            this.scores = response.data.map(item => item.score)
        })
        console.log('fetch')
    }

    postHighscoreToDatabase(name: string, score: number) {
        const params = new HttpParams()
            .set('name', name)
            .set('score', score)
        this.http.post(this.url + 'postHighscore?name=' + name + '&score=' + score, params).subscribe(() => {
        })
    }

    deleteHighscoreFromDatabase() {
        this.http.delete(this.url + 'removeLowestHighscore').subscribe(() => {
        })
    }

    @ViewChild('nameInput') nameInput!: ElementRef

    async onClickSortHighscore() {
        this.sortHighscore()
        await setTimeout(() => {
            this.getHighscoreFromDatabase()
        }, 500)
    }

    sortHighscore() {
        this.postHighscoreToDatabase(this.setNameForHighscore(), JSON.parse(localStorage.getItem('score')!))
        for (let i = 0; i < this.scores.length; i++) {
            if (this.scores.length > 2) {
                this.deleteHighscoreFromDatabase()
            }
        }
        this.getHighscoreFromDatabase()
        this.condition = 'highscoreChart'
    }

    setNameForHighscore() {
        const nameInput: HTMLInputElement = this.nameInput.nativeElement
        return nameInput.value
    }

    checkIfHighscore() {
        if (this.scores < JSON.parse(localStorage.getItem('score')!)) {
            this.condition = 'inputHighscoreName'
        }

    }

    checkIfFromStart() {
        if (localStorage.getItem('score') === JSON.stringify(-1)) {
            this.condition = 'fromStartHighscore'
        }
    }

    ngOnInit(): void {
        this.getHighscoreFromDatabase()
        this.fadeIn()
        this.checkIfFromStart()
        this.checkIfHighscore()
    }

    fadeOut() {
        let vol = 0.2
        const intervalId = setInterval(() => {
            if (vol > 0) {
                vol = Math.max(0, vol - 0.01)
                this.audio.volume = vol
                if (vol < 0.02) {
                    this.audio.pause()
                    this.audio.volume = 0
                }
            } else {
                clearInterval(intervalId)
            }
        }, 150)
    }

    fadeIn() {
        let vol = 0
        this.playSound()
        const intervalId = setInterval(() => {
            if (vol < 0.2) {
                vol += 0.01
                this.audio.volume = vol
            } else {
                clearInterval(intervalId)
            }
        }, 150)
    }

    @Output() sendMessage = new EventEmitter()


    onClickRestart() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendRestart)
    }
    onClickExit() {
        this.fadeOut()
        this.sendMessage.emit(this.conditionToSendExit)
    }
    onClickReplay() {
        this.sendMessage.emit(this.conditionToSendReplay)
    }
    playSound() {
        this.audio.src = '../../assets/music/Land-Puzzle-Death-Music.mp3'
        this.audio.volume = 0
        this.audio.load()
        this.audio.play()
    }
}
