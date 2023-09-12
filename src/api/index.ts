import axios from "axios";
import config from "../config.json";
import { ICategoryRequest, IProductRequest } from "../types";

const headers = {
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};
const urls = {
  categoris: `${config.url}/get_categories`,
  products: `${config.url}/get_product?categories=`,
};
/* get all categories api */
export async function CategoriesApi() {
  let response: ICategoryRequest[] = [];
  await axios
    .get(urls.categoris, { headers: headers })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return response;
}
/* get all products api */
export async function ProductsApi(id: number) {
  let response: IProductRequest[] = [];
  await axios
    .get(`${urls.products}${id}`, { headers: headers })
    .then((res) => {
      response = res.data.list;
    })
    .catch((err) => {
      console.log(err.response);
    });
  return response;
}
