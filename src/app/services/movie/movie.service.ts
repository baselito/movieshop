import { IMovies } from './../../models/IMovies';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IMovieService {
  getMovies(): void;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService implements IMovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
    );
    // .subscribe(
    //   (movies: IMovies[]) => {
    //     this.movies.next(movies);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('Get movies completed');
    //   }
    // );
  }

  getMovie(movieNumber: number): Observable<IMovies> {
    return this.http.get<IMovies>(
      `https://medieinstitutet-wie-products.azurewebsites.net/api/products/${movieNumber}`
    );
  }

  // buyMovie(movie): void {
  //   console.log('movie ordered ' + movie.price);
  // }
}
