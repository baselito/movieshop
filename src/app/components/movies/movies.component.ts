import { Component, OnInit } from '@angular/core';
import { IMovies } from 'src/app/models/IMovies';

import { MovieService } from 'src/app/services/movie/movie.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovies[] = [];

  title = 'Movieshop';

  buyMovie(movie): void {
    this.cartservice.movieToCart(movie);
  }

  constructor(
    private service: MovieService,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.service.movies.subscribe((movie) => {
      this.movies = movie;
      console.log('List of movies', this.movies);
    });
    this.service.getMovies();
  }
}
