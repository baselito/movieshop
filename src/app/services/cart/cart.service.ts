import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ICartMovies, Checkout } from 'src/app/models/ICart';
import { IMovies } from 'src/app/models/IMovies';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cart: ICartMovies[] = [];
  checkout: Checkout = new Checkout();

  constructor() {}

  // tslint:disable-next-line: typedef
  // calculateTotalPrice() {
  //   this.checkout.total = 0;
  //   for (const total of this.cart) {
  //     this.checkout.total += total.totalPrice;
  //   }
  // }

  getItems(): ICartMovies[] {
    return this.checkout.getCartMovies();
  }

  getTotal(): number {
    return this.checkout.getTotal();
  }

  movieToCart(recievedMovie: IMovies): void {
    const newMovie: ICartMovies = {
      id: recievedMovie.id,
      name: recievedMovie.name,
      price: recievedMovie.price,
      totalPrice: recievedMovie.price,
      imageUrl: recievedMovie.imageUrl,
      quantity: 1,
      productId: recievedMovie.id,
      amount: 1,
    };

    this.checkout.addOrIncreaseMovie(newMovie);
  }

  plus(movie: ICartMovies): void {
    this.checkout.addOrIncreaseMovie(movie);
  }

  minus(movie: ICartMovies): void {
    this.checkout.decreaseMovieQuantity(movie);
  }

  delete(movie: ICartMovies): void {
    this.checkout.removeMovie(movie);
  }

  clear(): void {
    this.checkout.clearCartMovies();
  }
}
