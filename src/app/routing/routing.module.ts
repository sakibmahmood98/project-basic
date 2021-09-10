import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BalanceComponent } from '../balance/balance.component';
import { DepositComponent } from '../deposit/deposit.component';
import { WithdrawComponent } from '../withdraw/withdraw.component';
import { DepositaComponent } from '../deposita/deposita.component';
import { DepositbComponent } from '../depositb/depositb.component';

const routes: Routes = [
  { path:'balance', component: BalanceComponent },
  { path:'deposit', component: DepositComponent, 
    children : [ 
      { path:'coins', component: DepositaComponent },
      { path:'notes', component: DepositbComponent } 
    ]},
    { path:'withdraw', component:WithdrawComponent }
];


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]

})
export class RoutingModule { }
export const ArrayOfComponents = [BalanceComponent, DepositComponent, WithdrawComponent, DepositaComponent,
  DepositbComponent]