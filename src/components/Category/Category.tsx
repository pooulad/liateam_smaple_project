import useProductRequests from "../../hooks/useProductsRequests";
import { useParams } from "react-router-dom";
import "./styles/category.css";
import "../styles/common.css";
import { ICategoryRequest, IProductRequest } from "../../types";
import config from "../../config.json";
import { dictionary } from "../../dictionary";
import { moneyFormat } from "../../utils/TomanGenerator";
import AddCartIcon from "../../assets/ts/AddCartIcon";
import Loader from "../Loader/Loader";

export default function Category() {
  const { id } = useParams();
  const { products, productsLoading } = useProductRequests(Number(id));
  console.log(products, productsLoading);
  const categories = JSON.parse(localStorage.getItem("categories")!);
  const currentCategory = categories.find(
    (item: ICategoryRequest) => item.id === id
  );
  console.log(currentCategory);
  const AddNewItemHandker = () => {
    console.log("here");
  };
  return (
    <div className="client_div">
      <div className="page_title">{currentCategory?.name}</div>
      <div className="product_section">
        {productsLoading ? (
          <Loader />
        ) : (
          <>
            {products.map((item: IProductRequest) => {
              return (
                <div key={item.id} className="product_item">
                  <img
                    src={`${config.domain}/${item.small_pic}`}
                    alt="product_img"
                  />
                  <span>{item.title}</span>
                  <div className="product_details">
                    <div className="price_section">
                      {moneyFormat(item.price.final_price.toString())}
                      &nbsp;
                      {dictionary.toman}
                    </div>
                    <button
                      onClick={AddNewItemHandker}
                      className="add_cart_btn"
                    >
                      <AddCartIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
