import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    DetailsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaiModule { }
