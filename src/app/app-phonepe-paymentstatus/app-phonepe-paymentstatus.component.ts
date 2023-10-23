import { Component } from '@angular/core';
import { CartService } from 'src/Service/cart.service';
import { TransactionDetail } from 'src/Models/transaction-detail';

@Component({
  selector: 'app-paymentstatus',
  templateUrl: './app-phonepe-paymentstatus.component.html',
  styleUrls: ['./app-phonepe-paymentstatus.component.css']
})
export class AppPhonepePaymentstatusComponent {
  transactionDetail: TransactionDetail[];
  constructor(public cartService: CartService) {
    this.transactionDetail = [];
    this.cartService.response().subscribe(response =>
      {
        this.transactionDetail = response;
        
      });
  }

  get transactionDetails(): TransactionDetail[]{
   // let transactionDetail: TransactionDetail[] ;//= [{ TransactionId : "MT7850590068188104",Status:"Sucsess",Amount:1200}];
    return this.transactionDetail;
  }
}
