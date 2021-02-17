import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/models/IMovies';

import { MovieService } from 'src/app/services/movie/movie.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ICartMovies } from 'src/app/models/ICart';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  movies: IMovies[] = [];

  title = 'Movieshop';

  buyMovie(movie): void {
    this.cartservice.movieToCart(movie);
  }

  constructor(
    private service: MovieService,
    private cartservice: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((movie) => {
      this.movies = movie;
      console.log('List of movies', this.movies);
    });
    // this.service.getMovies();
  }
}
