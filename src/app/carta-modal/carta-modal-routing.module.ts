import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaModalPage } from './carta-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CartaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaModalPageRoutingModule {}
