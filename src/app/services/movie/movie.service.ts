import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovies } from 'src/app/models/IMovies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
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

  // buyMovie(movie): void {
  //   console.log('movie ordered ' + movie.price);
  // }
}
