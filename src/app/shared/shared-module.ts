import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const MODULO = [CommonModule, FormsModule, IonicModule];
const COMPONENT = [];



@NgModule({
  declarations: [],
  imports: [...MODULO],
  exports: [...MODULO],
})
export class SharedModule { }
