import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = 'News';
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor() {}

  onProfileClick() {
    this.toggleSidebar.emit(); 
  }
}
