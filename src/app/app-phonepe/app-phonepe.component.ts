import { Component } from '@angular/core';
import { ProductDetail } from 'src/Models/product-detail';
import { ProductService } from 'src/Service/product.service';
import { CartService } from 'src/Service/cart.service';
import { CartDetail } from 'src/Models/cart-detail';
import { OrderDetail } from 'src/Models/order-detail';

@Component({
  selector: 'app-app-phonepe',
  templateUrl: './app-phonepe.component.html',
  styleUrls: ['./app-phonepe.component.css']
})
export class AppPhonepeComponent {
  title = 'PhonePe-Integration-app';
  products: ProductDetail[];
  constructor(public productService: ProductService, public cartService: CartService) {
    this.products = productService.getProducts();
  }
  
  addToCart(product: ProductDetail) {
   this.cartService.addProductToCart(product);
  }
  
  get cartDetails(): CartDetail[]{
    return this.cartService.getCartDetails();
  }
  
  product(item1: number, item2: number): number {
    return item1 * item2;
  }

  removeProductToCart(cartDetail: CartDetail){
    this.cartService.removeProductToCart(cartDetail);
  }
  
  createPayment(){
    const orderDetail = <OrderDetail>{
      userId :1,
      orderAmount:this.cartService.getCartSum(),
      customerName :"test user",
      orderId:"T001"
    }
  
    this.cartService.pay(orderDetail);
  }
}
