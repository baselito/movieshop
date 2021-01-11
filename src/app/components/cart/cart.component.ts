import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { ICartMovies, Checkout } from 'src/app/models/ICart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CheckoutService } from 'src/app/services/checkout/checkout.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartservice: CartService,
    private checkoutservice: CheckoutService
  ) {}

  totalCart: ICartMovies[];

  ngOnInit(): void {
    this.totalCart = this.cartservice.getItems();
  }

  plusBtn(movie): void {
    this.cartservice.plus(movie);
  }
  minusBtn(movie): void {
    this.cartservice.minus(movie);
  }
  deleteBtn(movie): void {
    this.cartservice.delete(movie);
  }
}
