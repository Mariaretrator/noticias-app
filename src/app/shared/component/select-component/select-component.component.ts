import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interface/user.interface';


@Component({
  selector: 'app-select',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss'],
  standalone: false
})
export class SelectComponent {
  @Input() options: Country[] = [];
  @Input() label: string = 'Selecciona una opción';
  @Output() selected = new EventEmitter<Country>();

  onChange(event: any) {
    const country = this.options.find(opt => opt.id === event.target.value);
    if (country) {
      this.selected.emit(country);
    }
  }
}
