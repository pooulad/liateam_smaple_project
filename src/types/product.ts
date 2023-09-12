import { IProductRequest } from ".";

export interface IProductRequests {
  products: IProductRequest[];
  productsLoading: boolean;
}

export interface IPriceProduct {
  production_price: string;
  price: string;
  final_price: number;
}
