import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaModalPageRoutingModule } from './carta-modal-routing.module';

import { CartaModalPage } from './carta-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaModalPageRoutingModule
  ],
  declarations: [CartaModalPage]
})
export class CartaModalPageModule {}
