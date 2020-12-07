import { Injectable, Testability } from '@angular/core';
import { ICartMovies, ICheckout } from 'src/app/models/ICart';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  checkoutMovies: ICartMovies[];
  checkout: ICheckout[];

  constructor() { }

  checkedOut(cart: ICartMovies): void {
    // this.checkoutMovies.push(cart);
  }
}
