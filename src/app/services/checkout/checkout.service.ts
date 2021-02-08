import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartMovies, Checkout, CheckoutInput } from 'src/app/models/ICart';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private cartservice: CartService, private http: HttpClient) {}

  //cart: ICheckout = this.cartservice.getCheckout();

  isShown = false;

  // tslint:disable-next-line: typedef
  sendOrder(input: CheckoutInput) {
    this.isShown = true;
    // tslint:disable-next-line: no-unused-expression
    //console.log('Order sent', this.cart);
    /*
    {
     
        "companyId": 333,
        "created": "0001-01-01T00:00:00",
        "createdBy": null,
        "paymentMethod": "Paypal",
        "totalPrice": 3535,
        "status": 0,
        "orderRows": []
    }
    {"id":5959,"productId":76,"product":null,"amount":2,"orderId":5016}]}
    */
    const order = {
      companyId: 333,
      created: new Date(),
      createdBy: input.createdBy,
      paymentMethod: input.paymentMethod,
      totalPrice: input.totalPrice,
      status: 0,
      orderRows: [],
    };

    input.orderRows.forEach((x) => {
      order.orderRows.push({
        productId: x.id,
        amount: x.quantity,
        name: 'my name',
      });
    });

    return this.http.post(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
      order
    );
  }
}
