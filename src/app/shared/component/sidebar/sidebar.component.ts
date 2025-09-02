import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen = false;

  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  onOptionClick(option: string) {
    this.optionSelected.emit(option);
  }
}
