import { Component, Input } from '@angular/core';
import { IMovies } from './models/IMovies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() movies: IMovies;
}
