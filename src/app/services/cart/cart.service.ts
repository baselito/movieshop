import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICartMovies } from 'src/app/models/ICart';
import { IMovies } from 'src/app/models/IMovies';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartObserver = new Subject<ICartMovies>();
  cartObserver$ = this.cartObserver.asObservable();

  cart: ICartMovies[] = [];
  // quantity = 1;
  // checkOutActive = false;

  constructor() {}

  getItems(): ICartMovies[] {
    return this.cart;
}


  movieToCart(recievedMovie: IMovies): void {
    const newMovie: ICartMovies = {
      id: recievedMovie.id,
      name: recievedMovie.name,
      price: recievedMovie.price,
      totalPrice: recievedMovie.price,
      imageUrl: recievedMovie.imageUrl,
      quantity: 1,
    };
    const foundMovie = this.cart.find(
      (searchMovies) => searchMovies.id === newMovie.id);
    if (foundMovie) {
      const oldMovie = foundMovie;
      // tslint:disable-next-line: no-shadowed-variable
      const newMovie = {
        ...oldMovie,
        totalPrice: oldMovie.price * (oldMovie.quantity + 1),
        quantity: oldMovie.quantity + 1,
      };
      this.cart.splice(this.cart.indexOf(oldMovie), 1, newMovie);
      console.log(this.cart);
    } else {
      this.cart.push(newMovie);
      console.log(this.cart);
    }
  }

  plus(movie: ICartMovies): void {
    if ( movie.quantity >= 1) {
      const oldMovie = movie;
      // tslint:disable-next-line: no-shadowed-variable
      const newMovie = {
        ...oldMovie,
        totalPrice: oldMovie.price * (oldMovie.quantity + 1),
        quantity: oldMovie.quantity + 1,
      };
      this.cart.splice(this.cart.indexOf(oldMovie), 1, newMovie);
      console.log(this.cart);
    }
  }

  minus(movie: ICartMovies): void {
    if (movie.quantity > 1) {
      const oldMovie = movie;
      // tslint:disable-next-line: no-shadowed-variable
      const newMovie = {
        ...oldMovie,
        totalPrice: oldMovie.price * (oldMovie.quantity - 1),
        quantity: oldMovie.quantity - 1,
      };
      this.cart.splice(this.cart.indexOf(oldMovie), 1, newMovie);
      console.log(this.cart);
  }
    }
  delete(movie: ICartMovies): void {
    this.cart.splice(this.cart.indexOf(movie), 1);
    console.log(this.cart);
  }
}
