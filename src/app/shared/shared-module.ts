import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectComponentComponent } from './component/select-component/select-component.component';
import { InputComponentComponent } from './component/input-component/input-component.component';
import { UserFormComponentComponent } from './component/user-form-component/user-form-component.component';
import { ButtonComponent } from './component/button-component/button-component.component';

const MODULO = [CommonModule, FormsModule, IonicModule];
const COMPONENT = [SelectComponentComponent , InputComponentComponent , UserFormComponentComponent , ButtonComponent ];



@NgModule({
  declarations: [...COMPONENT],
  imports: [...MODULO],
  exports: [...MODULO, ...COMPONENT],
})
export class SharedModule { }
