export interface IMovies {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: Date;
  productCategory: [
    { categoryId: number; category: null },
    { categoryId: number; category: null }
  ];
}
