import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'first-angular'
}
