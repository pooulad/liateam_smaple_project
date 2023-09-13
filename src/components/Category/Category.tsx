import useProductRequests from "../../hooks/useProductsRequests";
import { useParams } from "react-router-dom";
import "./styles/category.css";
import "../styles/common.css";

export default function Category() {
  const { id } = useParams();
  const { products, productsLoading } = useProductRequests(Number(id));
  console.log(products, productsLoading);

  return (
    <div className="client_div">
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
      <div>cat</div>
    </div>
  );
}
