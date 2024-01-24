
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
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
    styleUrls: ['./button-component.component.css'],
})
export class ButtonComponentComponent {
  
  @Input()
      backgroundColor?: string
  
  @Input()
      color: 'blue' | 'green' | 'yellow' | 'red' | 'black' | 'none' = 'black'
  
  
  
  /**
   * @required
   */
  @Input()
      label = 'Button'

  /**
   * Optional click handler
   */
  @Output()
      onClick = new EventEmitter<Event>()

  public get classes(): string[] {
      return ['storybook-button', `storybook-button--${this.color}`]
  }
}
