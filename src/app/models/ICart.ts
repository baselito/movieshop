export interface ICartMovies {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  imageUrl: string;
  quantity: number;
}

export class Checkout {
  private cartMovies: ICartMovies[] = [];

  getTotal(): number {
    if (!this.cartMovies || this.cartMovies.length === 0) {
      return 0;
    }

    let total = 0;
    this.cartMovies.forEach((element) => {
      total += element.totalPrice;
    });
    return total;
  }

  getCartMovies(): ICartMovies[] {
    return this.cartMovies;
  }

  addOrIncreaseMovie(cartMovie: ICartMovies): void {
    const movie = this.updateItem(cartMovie, 1);
    if (!movie) {
      this.cartMovies.push(cartMovie);
    }
  }

  decreaseMovieQuantity(cartMovie: ICartMovies): void {
    this.updateItem(cartMovie, -1);
  }

  removeMovie(cartMovie: ICartMovies): void {
    this.cartMovies.splice(this.cartMovies.indexOf(cartMovie), 1);
  }

  private updateItem(cartMovie: ICartMovies, quantity: number): ICartMovies {
    const foundMovie = this.cartMovies.find(
      (searchMovies) => searchMovies.id === cartMovie.id
    );
    if (foundMovie) {
      const oldMovie = foundMovie;
      // tslint:disable-next-line: no-shadowed-variable
      const newMovie = {
        ...oldMovie,
        totalPrice: oldMovie.price * (oldMovie.quantity + quantity),
        quantity: oldMovie.quantity + quantity,
      };
      this.cartMovies.splice(this.cartMovies.indexOf(oldMovie), 1, newMovie);
    }
    return foundMovie;
  }
}

export class CheckoutInput {
  createdBy: string;
  paymentMethod: number;
  orderRows: ICartMovies[];
  totalPrice: number;
}

// export interface IOrder {
//   id: number;
//   companyId: 11830;
//   created: Date;
//   createdBy: string;
//   paymentMethod: string;
//   totalPrice: number;
//   status: number;
//   orderRows: [{ id: number, productId: number, product: string, amount: number}];
// }

// "id":4331,
// "companyId":0,
// "created":"0001-01-01T00:00:00",
// "createdBy":"Milad",
// "paymentMethod":"MasterCard",
// "totalPrice":199,
// "status":2,
// "orderRows":[{"id":5072,"productId":103,"product":null,"amount":1,"orderId":4331},{"id":5073,"productId":101,"product":null,"amount":4,"orderId":4331}]
