import { useQuery } from "@tanstack/react-query";
import { ToastErrorMessage } from "../utils/ToastMessageGenerator";
import { dictionary } from "../dictionary";
import { CategoriesApi } from "../api";
import { ICategoryRequests } from "../types/category";

export default function useCategoryRequests(): ICategoryRequests {
  const { data: categories, isFetching: categoriesLoading } = useQuery({
    queryKey: ["categories", false],
    queryFn: () => CategoriesApi(),
    onError: () => {
      ToastErrorMessage(dictionary.errors.general);
    },
    initialData: [],
  });

  return {
    categories,
    categoriesLoading,
  };
}
