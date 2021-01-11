import { Component, OnInit } from '@angular/core';
import { ICartMovies, Checkout, CheckoutInput } from 'src/app/models/ICart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private checkoutService: CheckoutService
  ) {}
  //cart: Checkout = this.cartservice.getItems();
  isShown = false;
  clicked = false;
  totalPrice = 0;
  order: CheckoutInput = new CheckoutInput();
  ngOnInit(): void {
    this.totalPrice = this.cartservice.getTotal();
  }

  // tslint:disable-next-line: typedef
  sendOrder() {
    this.isShown = true;
    this.order.orderRows = this.cartservice.getItems();
    this.order.totalPrice = this.cartservice.getTotal();
    this.checkoutService.sendOrder(this.order).subscribe((x) => {
      console.log(x);
    });
    console.log('Order sent', this.cartservice.checkout);
  }
}
