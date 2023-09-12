import useProductRequests from "../../hooks/useProductsRequests";
import { useParams } from "react-router-dom";
import "./styles/category.css";

export default function Category() {
  const { id } = useParams();
  const { products, productsLoading } = useProductRequests(Number(id));
  console.log(products, productsLoading);

  return (
    <div>
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
    </div>
  );
}
