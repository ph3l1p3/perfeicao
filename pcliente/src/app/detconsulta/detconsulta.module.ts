import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetconsultaPageRoutingModule } from './detconsulta-routing.module';

import { DetconsultaPage } from './detconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetconsultaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetconsultaPage]
})
export class DetconsultaPageModule {}
