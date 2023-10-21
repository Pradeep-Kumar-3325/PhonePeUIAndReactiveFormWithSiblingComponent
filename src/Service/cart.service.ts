import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartDetail } from 'src/Models/cart-detail';
import { OrderDetail } from 'src/Models/order-detail';
import { ProductDetail } from 'src/Models/product-detail';
import { environment } from './../environments/environment';
import { CreatePaymentResponse } from 'src/Models/create-payment-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDetails: CartDetail[] = [];
  apiUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  addProductToCart(product: ProductDetail){
    if (this.cartDetails.length > 0 
      && this.cartDetails.findIndex(t => t.productId == product.productId)>= 0){
      const newArr = this.cartDetails.map(obj => {
        if (obj.productId === product.productId) {
          return {...obj, quantity: obj.quantity+1};
        }
      
        return obj;
      });
      this.cartDetails = newArr;
    }
    else{
      this.cartDetails.push(
        { productId: product.productId, brand: product.brand, name: product.name, quantity: 1, price: product.price });
    }
  }

  public removeProductToCart(cartDetail: CartDetail){
    if (this.cartDetails.length > 0 
      && this.cartDetails.findIndex(t => t.productId == cartDetail.productId)>= 0){
      
      var item = this.cartDetails.filter(t => t.productId == cartDetail.productId);
      if(item.length > 1)
      {
        const newArr = this.cartDetails.map(obj => {
        if (obj.productId === cartDetail.productId) {
          return {...obj, quantity: obj.quantity-1};
        }
      
        return obj;
        });
       this.cartDetails = newArr;
      }
      else
      {
        if(item[0].quantity > 1)
        {
          const newArr = this.cartDetails.map(obj => {
            if (obj.productId === cartDetail.productId) {
              return {...obj, quantity: obj.quantity-1};
            }
          
            return obj;
            });
           this.cartDetails = newArr;
        }
        else
        {
        const index = this.cartDetails.indexOf(cartDetail);
        // use splice to remove 1 item starting at the given index
         this.cartDetails.splice(index, 1);
        }
      }
    }
    else{
      const index = this.cartDetails.indexOf(cartDetail);
     // use splice to remove 1 item starting at the given index
      this.cartDetails.splice(index, 1);
    }
  }

  public getCartDetails(): CartDetail[]{
    return this.cartDetails;
  }

  public getCartSum(): number{
    return this.cartDetails.map(t => t.price * t.quantity).reduce(function(a, b)
    {
      return a + b;
    });
  }

  public pay(orderDetail: OrderDetail){
    return this.httpClient.post<CreatePaymentResponse>(this.apiUrl+"/api/PhonePe/CreatePayment", orderDetail)
      .subscribe(response => {
        let phonepeResponse = JSON.parse(response.phonepeResponse);

        var url = phonepeResponse.data.instrumentResponse.redirectInfo.url;

        window.open(url);
        //this.scheduleStatusChecks(phonepeResponse.data.merchantTransactionId);
      });
  }

//  scheduleStatusChecks(TransactionId : number) {
//     // Initial check after 20-25 seconds
//     setTimeout(function () {
//         checkPhonePeStatus(TransactionId);

//         // Schedule checks "Every 3 seconds once for the next 30 seconds"
//         var intervalCount = 0;
//         intervalId = setInterval(function () {
//             checkPhonePeStatus(TransactionId);
//             intervalCount++;

//             if (intervalCount >= 10) {
//                 clearInterval(intervalId); // Stop after 30 seconds (10 intervals)
//             }
//         }, 3000);
//     }, 20000 + Math.random() * 5000); // Random delay within the specified range
// }
}
