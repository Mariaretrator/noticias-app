import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectComponent } from './component/select-component/select-component.component';
import { InputComponentComponent } from './component/input-component/input-component.component';
import { UserFormComponentComponent } from './component/user-form-component/user-form-component.component';
import { ButtonComponentComponent } from './component/button-component/button-component.component';


const MODULO = [CommonModule, FormsModule, IonicModule , ReactiveFormsModule];
const COMPONENT = [SelectComponent , InputComponentComponent , UserFormComponentComponent , ButtonComponentComponent];


@NgModule({
  declarations: [...COMPONENT],
  imports: [...MODULO],
  exports: [...MODULO, ...COMPONENT],
})
export class SharedModule { }
