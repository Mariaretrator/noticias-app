import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : false
})
export class HeaderComponent {
  @Input() title: string = 'News';
  @Output() profileClick = new EventEmitter<void>();

  constructor() { }

  onProfileClick() {
    this.profileClick.emit();
  }
}
