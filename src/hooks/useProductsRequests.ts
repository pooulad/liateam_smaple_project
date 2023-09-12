import { useQuery } from "@tanstack/react-query";
import { ToastErrorMessage } from "../utils/ToastMessageGenerator";
import { dictionary } from "../dictionary";
import { ProductsApi } from "../api";
import { IProductRequests } from "../types/product";

export default function useProductRequests(id: number): IProductRequests {
  const { data: products, isFetching: productsLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => ProductsApi(id),
    onError: () => {
      ToastErrorMessage(dictionary.errors.general);
    },
    initialData: [],
  });

  return {
    products,
    productsLoading,
  };
}
