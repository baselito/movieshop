export interface ICartMovies {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  imageUrl: string;
  quantity: number;
}

export interface ICheckout {
  totalPrice: number;
  cartMovies: ICartMovies[];
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