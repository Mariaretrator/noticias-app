import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
  standalone: false
})
export class ButtonComponentComponent {
  @Input() label: string = 'Enviar';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() disabled: boolean = false;
}
