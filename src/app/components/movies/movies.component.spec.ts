import { MovieService } from 'src/app/services/movie/movie.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import MovieserviceMock from 'src/app/services/movie/movie.service.mock';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      providers: [{ provide: MovieService, useClass: MovieserviceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should get more than 2 movies when loading', () => {
    expect(component.movies.length).toBeGreaterThan(1);
  });
});
