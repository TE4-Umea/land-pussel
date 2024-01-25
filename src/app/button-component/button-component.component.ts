
import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-button-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button-component.component.html',
    template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
    styleUrls: ['./button-component.component.css'],
})
export class ButtonComponentComponent {

    @Input()
        color: 'blue' | 'green' | 'yellow' | 'smallYellow' | 'red' | 'black' | 'none' = 'blue'



    @Input()
        label = 'Button'


    @Output()
        onClick = new EventEmitter<Event>()

    public get classes(): string[] {
        return ['button', `button--${this.color}`,]
    }
}
