import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPhonepePaymentstatusComponent } from './app-phonepe-paymentstatus/app-phonepe-paymentstatus.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'payment-status', component: AppPhonepePaymentstatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
