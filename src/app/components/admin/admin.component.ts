import { IMovies } from './../../models/IMovies';
import { CheckoutInput } from './../../models/ICart';
import { MovieService } from 'src/app/services/movie/movie.service';
import { OrderService } from './../../services/order/order.service';
import { Component, OnInit } from '@angular/core';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private movieService: MovieService
  ) {}

  orderNumber: number;

  order: CheckoutInput = new CheckoutInput();
  movies: IMovies[] = [];
  notFound: boolean = false;

  ngOnInit(): void {}

  getOrder() {
    let requests: [] = [];
    this.notFound = false;
    this.movies = [];
    this.order = new CheckoutInput();
    this.orderService.getOrder(this.orderNumber).subscribe(
      (x) => {
        if (!x) {
          this.notFound = true;
        }
        this.order = x;
        x.orderRows.forEach((orderLine) => {
          this.movieService.getMovie(orderLine.productId).subscribe((movie) => {
            movie.price = movie.price * orderLine.amount;
            this.movies.push(movie);
          });
        });
      },
      (err) => {
        console.log(err);
        this.notFound = true;
      }
    );
  }

  delete() {
    this.orderService.deleteOrder(this.orderNumber).subscribe(() => {
      this.order = new CheckoutInput();
      this.movies = [];
    });
  }
}
