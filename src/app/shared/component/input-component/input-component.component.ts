import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  standalone : false
})
export class InputComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() control!: AbstractControl | null;

  get formControl(): FormControl | null {
    return this.control as FormControl;
  }
}
