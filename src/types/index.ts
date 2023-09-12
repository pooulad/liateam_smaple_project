import { IPriceProduct } from "./product";

export interface ICategoryRequest {
  id: string;
  name: string;
  description: string;
  image: string;
}
export interface IProductRequest {
  id: number;
  title: string;
  is_package: boolean;
  image: string;
  small_pic: string;
  large_pic: string;
  medium_pic: string;
  price: IPriceProduct;
}
