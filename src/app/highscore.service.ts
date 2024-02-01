import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class HighscoreService {
    url = 'http://localhost:8080/getHighscore'

    constructor(private http: HttpClient) { }

    getHighscore(): Observable<object> {
        return this.http.get(this.url)
    }
}
