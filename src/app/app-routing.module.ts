import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { MoviePresentationComponent } from './components/movie-presentation/movie-presentation.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  // { path: 'movie-presentation', component: MoviePresentationComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: MoviesComponent /*, pathMatch: 'full' */ },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
