import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone : false
})
export class SidebarComponent {
  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  onOptionClick(option: string) {
    this.optionSelected.emit(option);
  }
}
