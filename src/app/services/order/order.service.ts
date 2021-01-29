import { HttpClient } from '@angular/common/http';
import { Injectable, Testability } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartMovies, Checkout, CheckoutInput } from 'src/app/models/ICart';
import { IMovies } from 'src/app/models/IMovies';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Checkout = new Checkout();

  constructor(private http: HttpClient) {}

  getOrder(orderNumber: number): Observable<CheckoutInput> {
    return this.http.get<CheckoutInput>(
      `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${orderNumber}`
    );
  }
}
