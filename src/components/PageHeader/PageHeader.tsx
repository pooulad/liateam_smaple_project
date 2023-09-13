import { CartData, ICategoryRequest } from "../../types";
import logo from "../../assets/images/loader.png";
import { Link } from "react-router-dom";
import "./styles/pageHeader.css";
import { isLinkActive } from "../../utils/ActiveLink";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { dictionary } from "../../dictionary";
import config from "../../config.json";
import { CartIcon, CloseIcon, TrashIcon } from "../../assets/ts";
import { useCartContext } from "../../context/CartContext";
import { moneyFormat } from "../../utils/TomanGenerator";

type PageHeaderProps = {
  categories: ICategoryRequest[];
};

export default function PageHeader(props: PageHeaderProps) {
  const location = useLocation();
  const [menu, setMenu] = useState<boolean>(false);
  const { cartQtyItems, removeItem, cartItems, addItem, decreaseItem } =
    useCartContext();
  const OpenCartMenuHandler = () => {
    setMenu(!menu);
  };
  const DeleteCartItemHandler = (id: number) => {
    removeItem(id);
  };
  const totalCount = cartItems.reduce((total, currentItem) => {
    return total + (currentItem.data.price.final_price || 0);
  }, 0);
  const totalDiscount = cartItems.reduce((total, currentItem) => {
    return total + (Number(currentItem.data.price.production_price) || 0);
  }, 0);
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="header_bottom">
        <div className="header_links">
          {props.categories.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  className={
                    isLinkActive(`/category/${item.id}`)
                      ? "active_header_link"
                      : "header_link"
                  }
                  to={`/category/${item.id}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="cart_div">
          <button
            type="button"
            onClick={OpenCartMenuHandler}
            className="cart_btn"
          >
            <div className="counter_div">{cartQtyItems}</div>
            <CartIcon />
          </button>
        </div>
        {menu ? (
          <div className="menu_div">
            {cartQtyItems > 0 ? (
              <>
                <div>
                  <span className="counter_cart_span">
                    {cartQtyItems}
                    &nbsp;
                    {dictionary.header.cart_counter_title}
                  </span>
                </div>
                <div className="product_items_cart">
                  {cartItems?.map((item: CartData) => {
                    return (
                      <div className="product_item_cart">
                        <div className="product_item_cart_img">
                          <img
                            className=""
                            src={`${config.domain}/${item.data.small_pic}`}
                            alt="product_img"
                          />
                        </div>
                        <div className="product_item_cart_details">
                          <div className="product_item_cart_des">
                            <span>{item.data.title}</span>
                            <button
                              onClick={() => {
                                DeleteCartItemHandler(item.data.id);
                              }}
                              className="delete_item_btn"
                            >
                              <CloseIcon />
                            </button>
                          </div>
                          <div className="inc_dec_btns">
                            <button
                              onClick={() => addItem(item.data.id, item.data)}
                              className="inc_dec_btn"
                            >
                              +
                            </button>
                            <div className="show_counter">{item.count}</div>
                            <button
                              onClick={() => decreaseItem(item.data.id)}
                              className="inc_dec_btn"
                            >
                              -
                            </button>
                            <button
                              onClick={() => removeItem(item.data.id)}
                              className="trash_icon"
                            >
                              <TrashIcon />
                            </button>
                          </div>
                          <div className="price_cart">
                            {moneyFormat(
                              item.data.price.final_price.toString()
                            )}
                            &nbsp;
                            {dictionary.toman}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="total_price">
                  <div className="total_price_item">
                    <span>{dictionary.cart.total}</span>
                    <span>
                      {moneyFormat(`${totalCount}`)}
                      &nbsp;
                      {dictionary.toman}
                    </span>
                  </div>
                  <div className="total_price_item">
                    <span>{dictionary.cart.payable}</span>
                    <span>
                      {moneyFormat(`${totalDiscount}`)}
                      &nbsp;
                      {dictionary.toman}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>{dictionary.header.not_found}</div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
