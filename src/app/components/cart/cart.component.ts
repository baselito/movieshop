import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { ICartMovies, ICheckout } from 'src/app/models/ICart';
import { IMovies } from 'src/app/models/IMovies';
import { CartService } from 'src/app/services/cart/cart.service';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';
import { OrderService } from 'src/app/services/order/order.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartservice: CartService, private route: ActivatedRoute, private orderservice: OrderService) {}


  cart = new Subject<ICartMovies[]>();
  cart$ = this.cart.asObservable();

  cartMovies: ICartMovies[];
  checkout: ICheckout[];



  ngOnInit(): void {
    this.cartMovies = this.cartservice.getItems();
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
  sendToCheckout(cartMovies): void {
    console.log('Send' , this.cartMovies);
    // this.orderservice.checkedOut(this.cart);
  }
}
