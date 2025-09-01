import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
  standalone: false,
})
export class ButtonComponent {
  @Input() label: string = 'Enviar';
  @Input() userData!: User;           
  @Output() onClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  handleClick() {
    if (this.userData) {
      localStorage.setItem('user', JSON.stringify(this.userData));

      this.onClick.emit();
      this.router.navigate(['/login']);
    } else {
      console.warn('No hay datos del usuario para guardar');
    }
  }
}
