import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectComponent } from './component/select-component/select-component.component';
import { ButtonComponentComponent } from './component/button-component/button-component.component';
import { InputComponent } from './component/input-component/input-component.component';
import { UserFormComponent } from './component/user-form-component/user-form-component.component';
import { ListComponent } from './component/list-component/list-component.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';


const MODULO = [CommonModule, FormsModule, IonicModule , ReactiveFormsModule];
const COMPONENT = [SelectComponent , InputComponent , UserFormComponent , ButtonComponentComponent , ListComponent , SidebarComponent , HeaderComponent];


@NgModule({
  declarations: [...COMPONENT],
  imports: [...MODULO],
  exports: [...MODULO, ...COMPONENT],
})
export class SharedModule { }
