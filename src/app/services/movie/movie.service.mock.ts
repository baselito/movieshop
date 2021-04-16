import { Subject } from 'rxjs';
import { IMovies } from '../../models/IMovies';
import { IMovieService } from './movie.service';
export default class MovieserviceMock implements IMovieService {
  // movies: IMovies[] = [];
  movies = new Subject<IMovies[]>();

  title = 'Movieshop';

  // constructor() {}

  getMovies(): void {
    this.movies.next([
      {
        id: 1,
        name: 'The Matrix',
        description:
          'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        price: 49,
        imageUrl: 'string',
        year: 1999,
        added: new Date(),
        productCategory: [
          { categoryId: 1, category: null },
          { categoryId: 2, category: null },
        ],
      },
      {
        id: 2,
        name: 'Interstellar',
        description:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        price: 129,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
        year: 2014,
        added: new Date(),
        productCategory: [
          { categoryId: 1, category: null },
          { categoryId: 2, category: null },
        ],
      },
      {
        id: 3,
        name: 'The Dark Knight',
        description:
          'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
        price: 199,
        imageUrl:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        year: 2008,
        added: new Date(),
        productCategory: [
          { categoryId: 1, category: null },
          { categoryId: 2, category: null },
        ],
      },
    ]);
  }
}
