import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Country } from '../../interface/user.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss'],
  standalone : false
})
export class SelectComponent {
  @Input() label!: string;
  @Input() options: Country[] = [];
  @Input() control!: AbstractControl | null;

  @Output() selected = new EventEmitter<Country>();

  onChange(event: any) {
    const value = event.target.value;
    const country = this.options.find(c => c.id === value);
    if (country && this.control) {
      this.selected.emit(country);
      this.control.setValue(country.id); 
    }
  }
}
